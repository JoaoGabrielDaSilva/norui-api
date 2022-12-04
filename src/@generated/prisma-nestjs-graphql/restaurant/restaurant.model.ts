import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Table } from '../table/table.model';
import { RestaurantCount } from './restaurant-count.output';

@ObjectType()
export class Restaurant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [Table], {nullable:true})
    tables?: Array<Table>;

    @Field(() => RestaurantCount, {nullable:false})
    _count?: RestaurantCount;
}
