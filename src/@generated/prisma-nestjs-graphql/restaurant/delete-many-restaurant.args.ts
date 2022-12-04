import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRestaurantArgs {

    @Field(() => RestaurantWhereInput, {nullable:true})
    @Type(() => RestaurantWhereInput)
    where?: RestaurantWhereInput;
}
