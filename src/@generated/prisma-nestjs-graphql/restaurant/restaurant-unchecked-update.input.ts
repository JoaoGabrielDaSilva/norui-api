import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TableUncheckedUpdateManyWithoutRestaurantNestedInput } from '../table/table-unchecked-update-many-without-restaurant-nested.input';

@InputType()
export class RestaurantUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => TableUncheckedUpdateManyWithoutRestaurantNestedInput, {nullable:true})
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput;
}
