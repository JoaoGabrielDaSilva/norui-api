import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TableCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    number?: true;

    @Field(() => Boolean, {nullable:true})
    restaurantId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
