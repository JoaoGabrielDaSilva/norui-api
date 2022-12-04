import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TableCreateInput } from 'src/@generated/prisma-nestjs-graphql/table/table-create.input';
import { TableUpdateInput } from 'src/@generated/prisma-nestjs-graphql/table/table-update.input';
import { TablesService } from './tables.service';

@Resolver('Table')
export class TablesResolver {
  constructor(private readonly tablesService: TablesService) {}

  @Mutation('createTable')
  create(@Args('createTableInput') createTableInput: TableCreateInput) {
    return this.tablesService.create(createTableInput);
  }

  @Query('tables')
  findAll() {
    return this.tablesService.findAll();
  }

  @Query('table')
  findOne(@Args('id') id: string) {
    return this.tablesService.findOne(id);
  }

  @Mutation('updateTable')
  update(@Args('updateTableInput') updateTableInput: TableUpdateInput) {
    return this.tablesService.update(updateTableInput);
  }

  @Mutation('removeTable')
  remove(@Args('id') id: string) {
    return this.tablesService.remove(id);
  }
}
