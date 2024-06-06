import { User } from "../entities/User";
import { UserModel, CredentialModel } from "../config/data-source";
import CreateUserDto from "../dtos/UserDto";
import { createCredential } from "./credentialsService";

export const getAllUsers = async (): Promise<User[]> => {
    return await UserModel.find({ relations: ["credential", "turns"] });
};

export const getUserById = async (id: number): Promise<User | null> => {
    return await UserModel.findOne({ where: { id }, relations: ["credential", "turns"] });
};

export const register = async (userDto: CreateUserDto): Promise<User> => {
    const { credential: credentialDto, ...userData } = userDto;

    // Crear el usuario sin credenciales
    const newUser = UserModel.create(userData);
    await UserModel.save(newUser);

    // Crear las credenciales del usuario
    const newCredential = CredentialModel.create({ ...credentialDto, user: newUser });
    await CredentialModel.save(newCredential);

    // Asociar las credenciales al usuario
    newUser.credential = newCredential;
    await UserModel.save(newUser);

    return newUser;
};


