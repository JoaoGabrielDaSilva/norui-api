import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantUpdateWithoutUserInput } from './restaurant-update-without-user.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutUserInput } from './restaurant-create-without-user.input';

@InputType()
export class RestaurantUpsertWithoutUserInput {

    @Field(() => RestaurantUpdateWithoutUserInput, {nullable:false})
    @Type(() => RestaurantUpdateWithoutUserInput)
    update!: RestaurantUpdateWithoutUserInput;

    @Field(() => RestaurantCreateWithoutUserInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutUserInput)
    create!: RestaurantCreateWithoutUserInput;
}
