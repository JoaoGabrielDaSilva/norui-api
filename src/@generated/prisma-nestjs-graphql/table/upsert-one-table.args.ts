import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';
import { TableCreateInput } from './table-create.input';
import { TableUpdateInput } from './table-update.input';

@ArgsType()
export class UpsertOneTableArgs {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: TableWhereUniqueInput;

    @Field(() => TableCreateInput, {nullable:false})
    @Type(() => TableCreateInput)
    create!: TableCreateInput;

    @Field(() => TableUpdateInput, {nullable:false})
    @Type(() => TableUpdateInput)
    update!: TableUpdateInput;
}
