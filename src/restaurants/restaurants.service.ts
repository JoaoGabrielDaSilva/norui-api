import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RestaurantCreateInput } from 'src/@generated/prisma-nestjs-graphql/restaurant/restaurant-create.input';
import { RestaurantUpdateInput } from 'src/@generated/prisma-nestjs-graphql/restaurant/restaurant-update.input';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  create(createRestaurantInput: RestaurantCreateInput) {
    return this.prisma.restaurant.create({
      data: createRestaurantInput,
      include: { tables: true },
    });
  }

  findAll() {
    return this.prisma.restaurant.findMany({
      include: { user: true, tables: true },
    });
  }

  findOne(id: string) {
    return '';
  }

  update(updateRestaurantInput: RestaurantUpdateInput) {
    return '';
  }

  remove(id: string) {
    return '';
  }
}
