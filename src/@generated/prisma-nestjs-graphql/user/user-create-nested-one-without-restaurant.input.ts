import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRestaurantInput } from './user-create-without-restaurant.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRestaurantInput } from './user-create-or-connect-without-restaurant.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRestaurantInput {

    @Field(() => UserCreateWithoutRestaurantInput, {nullable:true})
    @Type(() => UserCreateWithoutRestaurantInput)
    create?: UserCreateWithoutRestaurantInput;

    @Field(() => UserCreateOrConnectWithoutRestaurantInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRestaurantInput)
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
