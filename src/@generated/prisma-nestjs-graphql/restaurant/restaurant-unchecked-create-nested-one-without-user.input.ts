import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantCreateWithoutUserInput } from './restaurant-create-without-user.input';
import { Type } from 'class-transformer';
import { RestaurantCreateOrConnectWithoutUserInput } from './restaurant-create-or-connect-without-user.input';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';

@InputType()
export class RestaurantUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => RestaurantCreateWithoutUserInput, {nullable:true})
    @Type(() => RestaurantCreateWithoutUserInput)
    create?: RestaurantCreateWithoutUserInput;

    @Field(() => RestaurantCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => RestaurantCreateOrConnectWithoutUserInput)
    connectOrCreate?: RestaurantCreateOrConnectWithoutUserInput;

    @Field(() => RestaurantWhereUniqueInput, {nullable:true})
    @Type(() => RestaurantWhereUniqueInput)
    connect?: RestaurantWhereUniqueInput;
}
