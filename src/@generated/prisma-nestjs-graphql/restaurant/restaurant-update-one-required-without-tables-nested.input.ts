import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutTablesInput } from './restaurant-create-without-tables.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutTablesInput } from './restaurant-create-or-connect-without-tables.input';
import { RestaurantUpsertWithoutTablesInput } from './restaurant-upsert-without-tables.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { RestaurantUpdateWithoutTablesInput } from './restaurant-update-without-tables.input';

@InputType()
export class RestaurantUpdateOneRequiredWithoutTablesNestedInput {

    @Field(() => RestaurantCreateWithoutTablesInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutTablesInput)
    create?: RestaurantCreateWithoutTablesInput;

    @Field(() => RestaurantCreateOrConnectWithoutTablesInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutTablesInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutTablesInput;

    @Field(() => RestaurantUpsertWithoutTablesInput, {nullable:true})
    @Type(() => RestaurantUpsertWithoutTablesInput)
    upsert?: RestaurantUpsertWithoutTablesInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;

    @Field(() => RestaurantUpdateWithoutTablesInput, {nullable:true})
    @Type(() => RestaurantUpdateWithoutTablesInput)
    update?: RestaurantUpdateWithoutTablesInput;
}
