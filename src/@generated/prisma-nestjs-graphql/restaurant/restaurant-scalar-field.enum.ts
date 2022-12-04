import { registerEnumType } from '@nestjs/graphql';

export enum RestaurantScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId"
}


registerEnumType(RestaurantScalarFieldEnum, { name: 'RestaurantScalarFieldEnum', description: undefined })
