import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableWhereInput } from './table-where.input';
import { Type } from 'class-transformer';
import { TableOrderByWithRelationInput } from './table-order-by-with-relation.input';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TableCountAggregateInput } from './table-count-aggregate.input';
import { TableMinAggregateInput } from './table-min-aggregate.input';
import { TableMaxAggregateInput } from './table-max-aggregate.input';

@ArgsType()
export class TableAggregateArgs {

    @Field(() => TableWhereInput, {nullable:true})
    @Type(() => TableWhereInput)
    where?: TableWhereInput;

    @Field(() => [TableOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TableOrderByWithRelationInput>;

    @Field(() => TableWhereUniqueInput, {nullable:true})
    cursor?: TableWhereUniqueInput;

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
