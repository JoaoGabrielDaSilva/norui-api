import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RestaurantWhereInput } from './restaurant-where.input';

@InputType()
export class RestaurantRelationFilter {

    @Field(() => RestaurantWhereInput, {nullable:true})
    is?: RestaurantWhereInput;

    @Field(() => RestaurantWhereInput, {nullable:true})
    isNot?: RestaurantWhereInput;
}
