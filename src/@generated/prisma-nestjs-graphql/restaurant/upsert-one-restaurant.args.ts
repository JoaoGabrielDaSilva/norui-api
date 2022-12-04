import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Type } from 'class-transformer';
import { RestaurantCreateInput } from './restaurant-create.input';
import { RestaurantUpdateInput } from './restaurant-update.input';

@ArgsType()
export class UpsertOneRestaurantArgs {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;

    @Field(() => RestaurantCreateInput, {nullable:false})
    @Type(() => RestaurantCreateInput)
    create!: RestaurantCreateInput;

    @Field(() => RestaurantUpdateInput, {nullable:false})
    @Type(() => RestaurantUpdateInput)
    update!: RestaurantUpdateInput;
}
