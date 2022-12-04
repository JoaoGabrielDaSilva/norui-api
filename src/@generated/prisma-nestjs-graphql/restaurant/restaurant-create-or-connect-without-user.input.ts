import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Type } from 'class-transformer';
import { RestaurantCreateWithoutUserInput } from './restaurant-create-without-user.input';

@InputType()
export class RestaurantCreateOrConnectWithoutUserInput {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;

    @Field(() => RestaurantCreateWithoutUserInput, {nullable:false})
    @Type(() => RestaurantCreateWithoutUserInput)
    create!: RestaurantCreateWithoutUserInput;
}
