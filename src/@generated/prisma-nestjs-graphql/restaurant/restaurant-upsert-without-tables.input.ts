import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantUpdateWithoutTablesInput } from './restaurant-update-without-tables.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutTablesInput } from './restaurant-create-without-tables.input';

@InputType()
export class RestaurantUpsertWithoutTablesInput {

    @Field(() => RestaurantUpdateWithoutTablesInput, {nullable:false})
    @Type(() => RestaurantUpdateWithoutTablesInput)
    update!: RestaurantUpdateWithoutTablesInput;

    @Field(() => RestaurantCreateWithoutTablesInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutTablesInput)
    create!: RestaurantCreateWithoutTablesInput;
}
