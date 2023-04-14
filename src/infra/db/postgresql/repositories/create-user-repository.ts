import type { CreateUserRepository, CreateUserRepositoryInput } from "../../../../data/protocols/create-user-repository";
import { uid } from "uid";

export class CreateUserPostgreRepository implements CreateUserRepository {
    public async create(data: CreateUserRepositoryInput): Promise<any> {
        const LENGTH = 10;
        const id = uid(LENGTH);

        return data;
    }
}