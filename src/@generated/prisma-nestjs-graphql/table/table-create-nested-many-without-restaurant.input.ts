import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutRestaurantInput } from './table-create-without-restaurant.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutRestaurantInput } from './table-create-or-connect-without-restaurant.input';
import { TableWhereUniqueInput } from './table-where-unique.input';

@InputType()
export class TableCreateNestedManyWithoutRestaurantInput {

    @Field(() => [TableCreateWithoutRestaurantInput], {nullable:true})
    @Type(() => TableCreateWithoutRestaurantInput)
    create?: Array<TableCreateWithoutRestaurantInput>;

    @Field(() => [TableCreateOrConnectWithoutRestaurantInput], {nullable:true})
    @Type(() => TableCreateOrConnectWithoutRestaurantInput)
    connectOrCreate?: Array<TableCreateOrConnectWithoutRestaurantInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Array<TableWhereUniqueInput>;
}
