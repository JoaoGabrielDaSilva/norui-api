import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TableListRelationFilter } from '../table/table-list-relation-filter.input';

@InputType()
export class RestaurantWhereInput {

    @Field(() => [RestaurantWhereInput], {nullable:true})
    AND?: Array<RestaurantWhereInput>;

    @Field(() => [RestaurantWhereInput], {nullable:true})
    OR?: Array<RestaurantWhereInput>;

    @Field(() => [RestaurantWhereInput], {nullable:true})
    NOT?: Array<RestaurantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => TableListRelationFilter, {nullable:true})
    tables?: TableListRelationFilter;
}
