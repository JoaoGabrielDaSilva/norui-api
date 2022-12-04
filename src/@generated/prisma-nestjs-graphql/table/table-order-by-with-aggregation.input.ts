import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TableCountOrderByAggregateInput } from './table-count-order-by-aggregate.input';
import { TableMaxOrderByAggregateInput } from './table-max-order-by-aggregate.input';
import { TableMinOrderByAggregateInput } from './table-min-order-by-aggregate.input';

@InputType()
export class TableOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    restaurantId?: keyof typeof SortOrder;

    @Field(() => TableCountOrderByAggregateInput, {nullable:true})
    _count?: TableCountOrderByAggregateInput;

    @Field(() => TableMaxOrderByAggregateInput, {nullable:true})
    _max?: TableMaxOrderByAggregateInput;

    @Field(() => TableMinOrderByAggregateInput, {nullable:true})
    _min?: TableMinOrderByAggregateInput;
}
