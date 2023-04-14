export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    nationality: string;
    birth: string;
}

export interface CreateUser {
    create: (data: CreateUserInput) => Promise<any>;
}