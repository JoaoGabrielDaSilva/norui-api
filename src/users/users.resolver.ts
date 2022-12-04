import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { OrderByParams } from '../graphql';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';

import { Prisma } from 'prisma/prisma-client';

import { PubSub } from 'graphql-subscriptions';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

const pubSub = new PubSub();

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  // @UseGuards(JwtAuthGuard)
  findAll(@Args('orderBy') orderBy: OrderByParams, @Args('page') page: number) {
    return this.usersService.findAll(orderBy, page);
  }

  @Query('user')
  findOne(
    @Args('findOneUserInput') findOneUserInput: Prisma.UserWhereUniqueInput,
  ) {
    return this.usersService.findOne(findOneUserInput);
  }

  @Mutation('updateUser')
  update(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.usersService.remove({ id });
  }
}
