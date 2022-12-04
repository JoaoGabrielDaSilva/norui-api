import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableCreateWithoutRestaurantInput } from './table-create-without-restaurant.input';

@InputType()
export class TableCreateOrConnectWithoutRestaurantInput {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: TableWhereUniqueInput;

    @Field(() => TableCreateWithoutRestaurantInput, {nullable:false})
    @Type(() => TableCreateWithoutRestaurantInput)
    create!: TableCreateWithoutRestaurantInput;
}
