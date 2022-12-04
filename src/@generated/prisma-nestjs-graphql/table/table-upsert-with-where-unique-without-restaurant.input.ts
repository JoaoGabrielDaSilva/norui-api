import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableUpdateWithoutRestaurantInput } from './table-update-without-restaurant.input';
import { TableCreateWithoutRestaurantInput } from './table-create-without-restaurant.input';

@InputType()
export class TableUpsertWithWhereUniqueWithoutRestaurantInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: TableWhereUniqueInput;

    @Field(() => TableUpdateWithoutRestaurantInput, {nullable:false})
    @Type(() => TableUpdateWithoutRestaurantInput)
    update!: TableUpdateWithoutRestaurantInput;

    @Field(() => TableCreateWithoutRestaurantInput, {nullable:false})
    @Type(() => TableCreateWithoutRestaurantInput)
    create!: TableCreateWithoutRestaurantInput;
}
