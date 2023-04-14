export interface CreateUserRepositoryInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    nationality: string;
    birth: string;
}

export interface CreateUserRepository {
    create: (data: CreateUserRepositoryInput) => Promise<any>;
}