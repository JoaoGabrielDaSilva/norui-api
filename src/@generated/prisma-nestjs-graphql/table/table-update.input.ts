import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RestaurantUpdateOneWithoutTablesNestedInput } from '../restaurant/restaurant-update-one-without-tables-nested.input';

@InputType()
export class TableUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    number?: StringFieldUpdateOperationsInput;

    @Field(() => RestaurantUpdateOneWithoutTablesNestedInput, {nullable:true})
    restaurant?: RestaurantUpdateOneWithoutTablesNestedInput;
}
