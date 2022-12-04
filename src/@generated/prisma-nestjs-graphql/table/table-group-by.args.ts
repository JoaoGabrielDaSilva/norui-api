import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';
import { Type } from 'class-transformer';
import { TableOrderByWithAggregationInput } from './table-order-by-with-aggregation.input';
import { TableScalarFieldEnum } from './table-scalar-field.enum';
import { TableScalarWhereWithAggregatesInput } from './table-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TableCountAggregateInput } from './table-count-aggregate.input';
import { TableMinAggregateInput } from './table-min-aggregate.input';
import { TableMaxAggregateInput } from './table-max-aggregate.input';

@ArgsType()
export class TableGroupByArgs {

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;

    @Field(() => [TableOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TableOrderByWithAggregationInput>;

    @Field(() => [TableScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TableScalarFieldEnum>;

    @Field(() => TableScalarWhereWithAggregatesInput, {nullable:true})
    having?: TableScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TableCountAggregateInput, {nullable:true})
    _count?: TableCountAggregateInput;

    @Field(() => TableMinAggregateInput, {nullable:true})
    _min?: TableMinAggregateInput;

    @Field(() => TableMaxAggregateInput, {nullable:true})
    _max?: TableMaxAggregateInput;
}
