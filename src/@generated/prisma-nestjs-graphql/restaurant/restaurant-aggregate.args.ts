import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';
import { Type } from 'class-transformer';
import { RestaurantOrderByWithRelationInput } from './restaurant-order-by-with-relation.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RestaurantCountAggregateInput } from './restaurant-count-aggregate.input';
import { RestaurantMinAggregateInput } from './restaurant-min-aggregate.input';
import { RestaurantMaxAggregateInput } from './restaurant-max-aggregate.input';

@ArgsType()
export class RestaurantAggregateArgs {

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

    @Field(() => RestaurantCountAggregateInput, {nullable:true})
    _count?: RestaurantCountAggregateInput;

    @Field(() => RestaurantMinAggregateInput, {nullable:true})
    _min?: RestaurantMinAggregateInput;

    @Field(() => RestaurantMaxAggregateInput, {nullable:true})
    _max?: RestaurantMaxAggregateInput;
}
