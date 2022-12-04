import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Restaurant } from '../restaurant/restaurant.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    hash!: string;

    @Field(() => String, {nullable:true})
    hashedRt!: string | null;

    @Field(() => Restaurant, {nullable:true})
    restaurant?: Restaurant | null;
}
