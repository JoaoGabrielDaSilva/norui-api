import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RestaurantUpdateManyMutationInput } from './restaurant-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RestaurantWhereInput } from './restaurant-where.input';

@ArgsType()
export class UpdateManyRestaurantArgs {

    @Field(() => RestaurantUpdateManyMutationInput, {nullable:false})
    @Type(() => RestaurantUpdateManyMutationInput)
    data!: RestaurantUpdateManyMutationInput;

    @Field(() => RestaurantWhereInput, {nullable:true})
    @Type(() => RestaurantWhereInput)
    where?: RestaurantWhereInput;
}
