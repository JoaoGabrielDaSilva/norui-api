import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RestaurantOrderByWithRelationInput } from '../restaurant/restaurant-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashedRt?: keyof typeof SortOrder;

    @Field(() => RestaurantOrderByWithRelationInput, {nullable:true})
    restaurant?: RestaurantOrderByWithRelationInput;
}
