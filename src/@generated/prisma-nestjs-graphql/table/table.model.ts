import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Restaurant } from '../restaurant/restaurant.model';

@ObjectType()
export class Table {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Restaurant, {nullable:true})
    restaurant?: Restaurant | null;

    @Field(() => String, {nullable:true})
    restaurantId!: string | null;
}
