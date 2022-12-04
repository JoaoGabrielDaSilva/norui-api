import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RestaurantScalarWhereWithAggregatesInput {

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => [RestaurantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RestaurantScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
