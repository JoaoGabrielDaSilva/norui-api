import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantUpdateInput } from './restaurant-update.input';
import { Type } from 'class-transformer';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@ArgsType()
export class UpdateOneRestaurantArgs {

    @Field(() => RestaurantUpdateInput, {nullable:false})
    @Type(() => RestaurantUpdateInput)
    data!: RestaurantUpdateInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;
}
