import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TableUpdateManyWithoutRestaurantNestedInput } from '../table/table-update-many-without-restaurant-nested.input';

@InputType()
export class RestaurantUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TableUpdateManyWithoutRestaurantNestedInput, {nullable:true})
    tables?: TableUpdateManyWithoutRestaurantNestedInput;
}
