import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateNestedManyWithoutRestaurantInput } from '../table/table-create-nested-many-without-restaurant.input';

@InputType()
export class RestaurantCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TableCreateNestedManyWithoutRestaurantInput, {nullable:true})
    tables?: TableCreateNestedManyWithoutRestaurantInput;
}
