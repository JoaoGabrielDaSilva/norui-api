import { registerEnumType } from '@nestjs/graphql';

export enum TableScalarFieldEnum {
    id = "id",
    number = "number",
    restaurantId = "restaurantId"
}


registerEnumType(TableScalarFieldEnum, { name: 'TableScalarFieldEnum', description: undefined })
