
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginLocalInput {
    email: string;
    password: string;
}

export class SignUpLocalInput {
    name: string;
    email: string;
    password: string;
}

export class CreateRestaurantInput {
    name: string;
    userId: string;
}

export class UpdateRestaurantInput {
    id: string;
    name?: Nullable<string>;
    userId?: Nullable<string>;
}

export class CreateTableInput {
    number: string;
    restaurantId: string;
}

export class UpdateTableInput {
    id: string;
    number?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
    email: string;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class FindUserByUnique {
    id?: Nullable<string>;
    email?: Nullable<string>;
}

export class Auth {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export class DeleteReturn {
    success: boolean;
}

export abstract class IMutation {
    abstract loginLocal(loginInput: LoginLocalInput): Auth | Promise<Auth>;

    abstract signUpLocal(signUpInput: SignUpLocalInput): Auth | Promise<Auth>;

    abstract logoutLocal(userId: string): Nullable<DeleteReturn> | Promise<Nullable<DeleteReturn>>;

    abstract createRestaurant(createRestaurantInput: CreateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract updateRestaurant(updateRestaurantInput: UpdateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract removeRestaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

    abstract createTable(createTableInput: CreateTableInput): Table | Promise<Table>;

    abstract updateTable(updateTableInput: UpdateTableInput): Table | Promise<Table>;

    abstract removeTable(id: string): Nullable<Table> | Promise<Nullable<Table>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Restaurant {
    id: string;
    name: string;
    user?: Nullable<User>;
    userId?: Nullable<string>;
    tables?: Nullable<Nullable<Table>[]>;
}

export abstract class IQuery {
    abstract restaurants(): Nullable<Restaurant>[] | Promise<Nullable<Restaurant>[]>;

    abstract restaurant(id: string): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

    abstract tables(): Nullable<Table>[] | Promise<Nullable<Table>[]>;

    abstract table(id: string): Nullable<Table> | Promise<Nullable<Table>>;

    abstract users(orderBy?: Nullable<OrderByParams>, page?: Nullable<number>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(findOneUserInput?: Nullable<FindUserByUnique>): Nullable<User> | Promise<Nullable<User>>;
}

export class Table {
    id: string;
    number: string;
    restaurant?: Nullable<Restaurant>;
    restaurantId?: Nullable<string>;
}

export class User {
    id: string;
    name: string;
    email: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
