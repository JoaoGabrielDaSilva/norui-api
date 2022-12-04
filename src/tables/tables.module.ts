import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesResolver } from './tables.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [TablesResolver, TablesService, PrismaService],
})
export class TablesModule {}
