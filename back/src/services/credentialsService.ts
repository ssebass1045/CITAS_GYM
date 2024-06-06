// credentialsService.ts

import { Credential } from "../entities/Credential";
import { CredentialModel, UserModel } from "../config/data-source";
import CreateCredentialDto from "../dtos/CreateCredentialDto";

export const createCredential = async (credentialDto: CreateCredentialDto): Promise<Credential> => {
    const newCredential = CredentialModel.create(credentialDto);
    await CredentialModel.save(newCredential);

    // Buscar el usuario y asignar la credencial
    const user = await UserModel.findOneBy({
        id: credentialDto.userId
    });

    if (user) {
        newCredential.user = user;
        await CredentialModel.save(newCredential);
    } else {
        throw new Error('User not found');
    }

    return newCredential;
};

export const verifyCredential = async (username: string, password: string): Promise<Credential | null> => {
    const credential = await CredentialModel.findOne({ where: { username, password } });
    return credential;
};
