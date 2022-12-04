import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpLocalInput, LoginLocalInput } from 'src/graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(validateUserInput: LoginLocalInput) {
    const user = await this.userService.findOne({
      email: validateUserInput.email,
    });
    if (!user) return null;

    return user;
  }

  async signUpLocal(signUpLocalInput: SignUpLocalInput) {
    const { password, ...data } = signUpLocalInput;

    const hash = await this.hashData(password);

    const newUser = await this.userService.create({
      ...data,
      hash,
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);

    await this.updateRefreshTokenHash(newUser.id, tokens.refreshToken);

    return {
      ...tokens,
      user: newUser,
    };
  }

  async updateRefreshTokenHash(userId: string, refreshToken: string) {
    const hash = await this.hashData(refreshToken);

    await this.userService.update(userId, { hashedRt: hash });
  }

  async login(loginInput: LoginLocalInput) {
    const user = await this.userService.findOne({ email: loginInput.email });

    if (!user) throw new ForbiddenException();

    const passwordMatches = await bcrypt.compare(
      loginInput.password,
      user.hash,
    );

    if (!passwordMatches) throw new ForbiddenException();

    const tokens = await this.getTokens(user.id, user.email);

    await this.updateRefreshTokenHash(user.id, tokens.refreshToken);

    return {
      ...tokens,
      user,
    };
  }

  async logout(userId: string) {
    const success = await this.userService.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });

    return { success };
  }

  async hashData(data: string) {
    return await bcrypt.hash(data, 10);
  }

  async getTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      await this.jwtService.signAsync({
        email: email,
        sub: userId,
        expiresIn: 60,
        secret: process.env.JWT_SECRET,
      }),
      await this.jwtService.signAsync({
        email: email,
        sub: userId,
        expiresIn: 60 * 5,
        secret: process.env.JWT_REFRESH_SECRET,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
