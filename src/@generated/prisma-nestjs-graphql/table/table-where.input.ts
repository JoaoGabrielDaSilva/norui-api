import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { RestaurantRelationFilter } from '../restaurant/restaurant-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class TableWhereInput {

    @Field(() => [TableWhereInput], {nullable:true})
    AND?: Array<TableWhereInput>;

    @Field(() => [TableWhereInput], {nullable:true})
    OR?: Array<TableWhereInput>;

    @Field(() => [TableWhereInput], {nullable:true})
    NOT?: Array<TableWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => RestaurantRelationFilter, {nullable:true})
    restaurant?: RestaurantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    restaurantId?: StringNullableFilter;
}
