import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantCreateInput } from 'src/@generated/prisma-nestjs-graphql/restaurant/restaurant-create.input';
import { RestaurantUpdateInput } from 'src/@generated/prisma-nestjs-graphql/restaurant/restaurant-update.input';
import { RestaurantsService } from './restaurants.service';

@Resolver('Restaurant')
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Mutation('createRestaurant')
  create(
    @Args('createRestaurantInput') createRestaurantInput: RestaurantCreateInput,
  ) {
    return this.restaurantsService.create(createRestaurantInput);
  }

  @Query('restaurants')
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Query('restaurant')
  findOne(@Args('id') id: string) {
    return this.restaurantsService.findOne(id);
  }

  @Mutation('updateRestaurant')
  update(
    @Args('updateRestaurantInput') updateRestaurantInput: RestaurantUpdateInput,
  ) {
    return this.restaurantsService.update(updateRestaurantInput);
  }

  @Mutation('removeRestaurant')
  remove(@Args('id') id: string) {
    return this.restaurantsService.remove(id);
  }
}
