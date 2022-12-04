import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRestaurantInput } from '../user/user-create-nested-one-without-restaurant.input';

@InputType()
export class RestaurantCreateWithoutTablesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutRestaurantInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRestaurantInput;
}
