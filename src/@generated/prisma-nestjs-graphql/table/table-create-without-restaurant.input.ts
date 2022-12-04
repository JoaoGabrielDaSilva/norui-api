import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class TableCreateWithoutRestaurantInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2, {message: "O número da mesa deve conter pelo menos 2 caracteres"})
    number!: string;
}
