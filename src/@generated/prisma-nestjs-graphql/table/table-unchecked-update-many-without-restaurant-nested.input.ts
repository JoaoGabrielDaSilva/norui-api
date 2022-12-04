import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TableCreateWithoutRestaurantInput } from './table-create-without-restaurant.input';
import { Type } from 'class-transformer';
import { TableCreateOrConnectWithoutRestaurantInput } from './table-create-or-connect-without-restaurant.input';
import { TableUpsertWithWhereUniqueWithoutRestaurantInput } from './table-upsert-with-where-unique-without-restaurant.input';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { TableUpdateWithWhereUniqueWithoutRestaurantInput } from './table-update-with-where-unique-without-restaurant.input';
import { TableUpdateManyWithWhereWithoutRestaurantInput } from './table-update-many-with-where-without-restaurant.input';
import { TableScalarWhereInput } from './table-scalar-where.input';

@InputType()
export class TableUncheckedUpdateManyWithoutRestaurantNestedInput {

    @Field(() => [TableCreateWithoutRestaurantInput], {nullable:true})
    @Type(() => TableCreateWithoutRestaurantInput)
    create?: Array<TableCreateWithoutRestaurantInput>;

    @Field(() => [TableCreateOrConnectWithoutRestaurantInput], {nullable:true})
    @Type(() => TableCreateOrConnectWithoutRestaurantInput)
    connectOrCreate?: Array<TableCreateOrConnectWithoutRestaurantInput>;

    @Field(() => [TableUpsertWithWhereUniqueWithoutRestaurantInput], {nullable:true})
    @Type(() => TableUpsertWithWhereUniqueWithoutRestaurantInput)
    upsert?: Array<TableUpsertWithWhereUniqueWithoutRestaurantInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    set?: Array<TableWhereUniqueInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    disconnect?: Array<TableWhereUniqueInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    delete?: Array<TableWhereUniqueInput>;

    @Field(() => [TableWhereUniqueInput], {nullable:true})
    @Type(() => TableWhereUniqueInput)
    connect?: Array<TableWhereUniqueInput>;

    @Field(() => [TableUpdateWithWhereUniqueWithoutRestaurantInput], {nullable:true})
    @Type(() => TableUpdateWithWhereUniqueWithoutRestaurantInput)
    update?: Array<TableUpdateWithWhereUniqueWithoutRestaurantInput>;

    @Field(() => [TableUpdateManyWithWhereWithoutRestaurantInput], {nullable:true})
    @Type(() => TableUpdateManyWithWhereWithoutRestaurantInput)
    updateMany?: Array<TableUpdateManyWithWhereWithoutRestaurantInput>;

    @Field(() => [TableScalarWhereInput], {nullable:true})
    @Type(() => TableScalarWhereInput)
    deleteMany?: Array<TableScalarWhereInput>;
}
