import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRestaurantInput } from './user-update-without-restaurant.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRestaurantInput } from './user-create-without-restaurant.input';

@InputType()
export class UserUpsertWithoutRestaurantInput {

    @Field(() => UserUpdateWithoutRestaurantInput, {nullable:false})
    @Type(() => UserUpdateWithoutRestaurantInput)
    update!: UserUpdateWithoutRestaurantInput;

    @Field(() => UserCreateWithoutRestaurantInput, {nullable:false})
    @Type(() => UserCreateWithoutRestaurantInput)
    create!: UserCreateWithoutRestaurantInput;
}
