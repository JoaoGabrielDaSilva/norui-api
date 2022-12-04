import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TableCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Int, {nullable:false})
    restaurantId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
