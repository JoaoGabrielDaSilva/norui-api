import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableUpdateWithoutRestaurantInput } from './table-update-without-restaurant.input';

@InputType()
export class TableUpdateWithWhereUniqueWithoutRestaurantInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: TableWhereUniqueInput;

    @Field(() => TableUpdateWithoutRestaurantInput, {nullable:false})
    @Type(() => TableUpdateWithoutRestaurantInput)
    data!: TableUpdateWithoutRestaurantInput;
}
