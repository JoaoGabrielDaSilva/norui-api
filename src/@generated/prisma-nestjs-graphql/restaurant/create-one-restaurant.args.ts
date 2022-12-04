import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantCreateInput } from './restaurant-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRestaurantArgs {

    @Field(() => RestaurantCreateInput, {nullable:false})
    @Type(() => RestaurantCreateInput)
    data!: RestaurantCreateInput;
}
