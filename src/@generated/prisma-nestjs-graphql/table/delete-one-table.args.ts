import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableWhereUniqueInput } from './table-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTableArgs {

    @Field(() => TableWhereUniqueInput, {nullable:false})
    @Type(() => TableWhereUniqueInput)
    where!: TableWhereUniqueInput;
}
