import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';
import { Type } from 'class-transformer';
import { RestaurantOrderByWithRelationInput } from './restaurant-order-by-with-relation.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RestaurantScalarFieldEnum } from './restaurant-scalar-field.enum';

@ArgsType()
export class FindFirstRestaurantOrThrowArgs {

    @Field(() => RestaurantWhereInput, {nullable:true})
    @Type(() => RestaurantWhereInput)
    where?: RestaurantWhereInput;

    @Field(() => [RestaurantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RestaurantOrderByWithRelationInput>;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    cursor?: RestaurantWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RestaurantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RestaurantScalarFieldEnum>;
}
