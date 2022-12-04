import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRestaurantNestedInput } from '../user/user-update-one-required-without-restaurant-nested.input';
import { TableUpdateManyWithoutRestaurantNestedInput } from '../table/table-update-many-without-restaurant-nested.input';

@InputType()
export class RestaurantUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRestaurantNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutRestaurantNestedInput;

    @Field(() => TableUpdateManyWithoutRestaurantNestedInput, {nullable:true})
    tables?: TableUpdateManyWithoutRestaurantNestedInput;
}
