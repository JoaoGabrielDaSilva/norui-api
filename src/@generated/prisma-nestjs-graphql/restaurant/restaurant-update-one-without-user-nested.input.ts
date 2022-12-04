import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutUserInput } from './restaurant-create-without-user.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutUserInput } from './restaurant-create-or-connect-without-user.input';
import { RestaurantUpsertWithoutUserInput } from './restaurant-upsert-without-user.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { RestaurantUpdateWithoutUserInput } from './restaurant-update-without-user.input';

@InputType()
export class RestaurantUpdateOneWithoutUserNestedInput {

    @Field(() => RestaurantCreateWithoutUserInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutUserInput)
    create?: RestaurantCreateWithoutUserInput;

    @Field(() => RestaurantCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutUserInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutUserInput;

    @Field(() => RestaurantUpsertWithoutUserInput, {nullable:true})
    @Type(() => RestaurantUpsertWithoutUserInput)
    upsert?: RestaurantUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;

    @Field(() => RestaurantUpdateWithoutUserInput, {nullable:true})
    @Type(() => RestaurantUpdateWithoutUserInput)
    update?: RestaurantUpdateWithoutUserInput;
}
