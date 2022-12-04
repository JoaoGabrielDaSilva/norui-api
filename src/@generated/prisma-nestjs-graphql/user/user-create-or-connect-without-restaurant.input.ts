import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRestaurantInput } from './user-create-without-restaurant.input';

@InputType()
export class UserCreateOrConnectWithoutRestaurantInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRestaurantInput, {nullable:false})
    @Type(() => UserCreateWithoutRestaurantInput)
    create!: UserCreateWithoutRestaurantInput;
}
