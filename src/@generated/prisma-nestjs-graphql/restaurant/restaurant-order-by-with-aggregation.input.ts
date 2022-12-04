import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RestaurantCountOrderByAggregateInput } from './restaurant-count-order-by-aggregate.input';
import { RestaurantMaxOrderByAggregateInput } from './restaurant-max-order-by-aggregate.input';
import { RestaurantMinOrderByAggregateInput } from './restaurant-min-order-by-aggregate.input';

@InputType()
export class RestaurantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => RestaurantCountOrderByAggregateInput, {nullable:true})
    _count?: RestaurantCountOrderByAggregateInput;

    @Field(() => RestaurantMaxOrderByAggregateInput, {nullable:true})
    _max?: RestaurantMaxOrderByAggregateInput;

    @Field(() => RestaurantMinOrderByAggregateInput, {nullable:true})
    _min?: RestaurantMinOrderByAggregateInput;
}
