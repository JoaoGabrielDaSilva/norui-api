import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutTablesInput } from './restaurant-create-without-tables.input';

@InputType()
export class RestaurantCreateOrConnectWithoutTablesInput {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;

    @Field(() => RestaurantCreateWithoutTablesInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutTablesInput)
    create!: RestaurantCreateWithoutTablesInput;
}
