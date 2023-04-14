import type { CreateUser, CreateUserInput } from "../../domain/usecase/create-user";
import type { CreateUserRepository } from "../protocols/create-user-repository";

export class DbCreateUser implements CreateUser {
    public constructor(private readonly createUserRepository: CreateUserRepository) {}
    
    public async create(data: CreateUserInput): Promise<any> {
        return this.createUserRepository.create(data);
    }
}