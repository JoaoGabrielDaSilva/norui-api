import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { LoginLocalInput, SignUpLocalInput } from 'src/graphql';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('loginLocal')
  @UseGuards(GqlAuthGuard)
  loginLocal(@Args('loginInput') loginInput: LoginLocalInput) {
    return this.authService.login(loginInput);
  }

  @Mutation('signUpLocal')
  signUpLocal(@Args('signUpInput') signUpInput: SignUpLocalInput) {
    return this.authService.signUpLocal(signUpInput);
  }

  @Mutation('logoutLocal')
  logoutLocal(@Args('userId') userId: string) {
    return this.authService.logout(userId);
  }
}
