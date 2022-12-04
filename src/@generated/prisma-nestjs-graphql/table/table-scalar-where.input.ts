import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class TableScalarWhereInput {

    @Field(() => [TableScalarWhereInput], {nullable:true})
    AND?: Array<TableScalarWhereInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    OR?: Array<TableScalarWhereInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    NOT?: Array<TableScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    restaurantId?: StringNullableFilter;
}
