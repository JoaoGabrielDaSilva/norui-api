import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantWhereUniqueInput } from './restaurant-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRestaurantOrThrowArgs {

    @Field(() => RestaurantWhereUniqueInput, {nullable:false})
    @Type(() => RestaurantWhereUniqueInput)
    where!: RestaurantWhereUniqueInput;
}
