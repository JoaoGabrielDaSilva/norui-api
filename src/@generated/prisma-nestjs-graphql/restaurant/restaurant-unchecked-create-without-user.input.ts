import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableUncheckedCreateNestedManyWithoutRestaurantInput } from '../table/table-unchecked-create-nested-many-without-restaurant.input';

@InputType()
export class RestaurantUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TableUncheckedCreateNestedManyWithoutRestaurantInput, {nullable:true})
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput;
}
