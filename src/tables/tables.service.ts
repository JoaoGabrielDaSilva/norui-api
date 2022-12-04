import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TableCreateInput } from 'src/@generated/prisma-nestjs-graphql/table/table-create.input';
import { TableUpdateInput } from 'src/@generated/prisma-nestjs-graphql/table/table-update.input';

@Injectable()
export class TablesService {
  constructor(private prisma: PrismaService) {}

  create(createTableInput: TableCreateInput) {
    return this.prisma.table.create({
      data: createTableInput,
      include: { restaurant: true },
    });
  }

  findAll() {
    return this.prisma.table.findMany({
      include: {
        restaurant: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.table.findUnique({ where: { id } });
  }

  update(updateTableInput: TableUpdateInput) {
    return '';
  }

  remove(id: string) {
    return `This action removes a #${id} table`;
  }
}
