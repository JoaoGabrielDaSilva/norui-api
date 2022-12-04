import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class TableScalarWhereWithAggregatesInput {

    @Field(() => [TableScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TableScalarWhereWithAggregatesInput>;

    @Field(() => [TableScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TableScalarWhereWithAggregatesInput>;

    @Field(() => [TableScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TableScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    restaurantId?: StringNullableWithAggregatesFilter;
}
