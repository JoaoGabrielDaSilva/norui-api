import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RestaurantCountAggregate } from './restaurant-count-aggregate.output';
import { RestaurantMinAggregate } from './restaurant-min-aggregate.output';
import { RestaurantMaxAggregate } from './restaurant-max-aggregate.output';

@ObjectType()
export class RestaurantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => RestaurantCountAggregate, {nullable:true})
    _count?: RestaurantCountAggregate;

    @Field(() => RestaurantMinAggregate, {nullable:true})
    _min?: RestaurantMinAggregate;

    @Field(() => RestaurantMaxAggregate, {nullable:true})
    _max?: RestaurantMaxAggregate;
}
