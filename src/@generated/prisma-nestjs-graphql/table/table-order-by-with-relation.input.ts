import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RestaurantOrderByWithRelationInput } from '../restaurant/restaurant-order-by-with-relation.input';

@InputType()
export class TableOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => RestaurantOrderByWithRelationInput, {nullable:true})
    restaurant?: RestaurantOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    restaurantId?: keyof typeof SortOrder;
}
