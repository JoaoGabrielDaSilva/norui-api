import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jtw.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-jwt.strategy';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    RefreshTokenStrategy,
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '60s' },
      secret: process.env.JWT_SECRET,
    }),
  ],
})
export class AuthModule {}
