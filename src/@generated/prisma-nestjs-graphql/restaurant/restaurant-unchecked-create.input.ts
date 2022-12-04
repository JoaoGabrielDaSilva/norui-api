import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableUncheckedCreateNestedManyWithoutRestaurantInput } from '../table/table-unchecked-create-nested-many-without-restaurant.input';

@InputType()
export class RestaurantUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => TableUncheckedCreateNestedManyWithoutRestaurantInput, {nullable:true})
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput;
}
