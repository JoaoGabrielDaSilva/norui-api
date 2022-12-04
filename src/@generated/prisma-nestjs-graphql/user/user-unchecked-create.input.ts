import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { RestaurantUncheckedCreateNestedOneWithoutUserInput } from '../restaurant/restaurant-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail({message: "O email deve ser válido"})
    email!: string;

    @Field(() => String, {nullable:false})
    hash!: string;

    @Field(() => String, {nullable:true})
    hashedRt?: string;

    @Field(() => RestaurantUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    restaurant?: RestaurantUncheckedCreateNestedOneWithoutUserInput;
}
