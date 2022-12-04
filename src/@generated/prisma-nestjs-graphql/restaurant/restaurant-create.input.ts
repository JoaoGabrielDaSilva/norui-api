import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRestaurantInput } from '../user/user-create-nested-one-without-restaurant.input';
import { TableCreateNestedManyWithoutRestaurantInput } from '../table/table-create-nested-many-without-restaurant.input';

@InputType()
export class RestaurantCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutRestaurantInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRestaurantInput;

    @Field(() => TableCreateNestedManyWithoutRestaurantInput, {nullable:true})
    tables?: TableCreateNestedManyWithoutRestaurantInput;
}
