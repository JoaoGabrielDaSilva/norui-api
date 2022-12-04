import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutTablesInput } from './restaurant-create-without-tables.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutTablesInput } from './restaurant-create-or-connect-without-tables.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@InputType()
export class RestaurantCreateNestedOneWithoutTablesInput {

    @Field(() => RestaurantCreateWithoutTablesInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutTablesInput)
    create?: RestaurantCreateWithoutTablesInput;

    @Field(() => RestaurantCreateOrConnectWithoutTablesInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutTablesInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutTablesInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;
}
