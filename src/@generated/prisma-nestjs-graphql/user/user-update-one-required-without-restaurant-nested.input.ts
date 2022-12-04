import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRestaurantInput } from './user-create-without-restaurant.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRestaurantInput } from './user-create-or-connect-without-restaurant.input';
import { UserUpsertWithoutRestaurantInput } from './user-upsert-without-restaurant.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRestaurantInput } from './user-update-without-restaurant.input';

@InputType()
export class UserUpdateOneRequiredWithoutRestaurantNestedInput {

    @Field(() => UserCreateWithoutRestaurantInput, {nullable:true})
    @Type(() => UserCreateWithoutRestaurantInput)
    create?: UserCreateWithoutRestaurantInput;

    @Field(() => UserCreateOrConnectWithoutRestaurantInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRestaurantInput)
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantInput;

    @Field(() => UserUpsertWithoutRestaurantInput, {nullable:true})
    @Type(() => UserUpsertWithoutRestaurantInput)
    upsert?: UserUpsertWithoutRestaurantInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRestaurantInput, {nullable:true})
    @Type(() => UserUpdateWithoutRestaurantInput)
    update?: UserUpdateWithoutRestaurantInput;
}
