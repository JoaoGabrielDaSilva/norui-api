import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/prisma-client';
import { OrderByParams } from 'src/graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll(orderBy?: OrderByParams, page?: number) {
    const limit = 1;

    const { field = 'name', direction = 'asc' } = orderBy || {};

    return this.prisma.user.findMany({
      orderBy: { [field]: direction },
      ...(page !== undefined
        ? {
            skip: page * limit,
            take: limit,
          }
        : {}),
    });
  }

  findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  update(id: string, userUpdateInput: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ data: userUpdateInput, where: { id } });
  }

  async updateMany(userUpdateManyInput: Prisma.UserUpdateManyArgs) {
    const success = await this.prisma.user.updateMany(userUpdateManyInput);

    return !!success;
  }

  remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where: userWhereUniqueInput });
  }
}
