// credentialsService.ts

import { ICredential } from '../interfaces/ICredential';


const credentials: ICredential[] = []; // Almacenará los pares de credenciales

export const createCredentials = async (username: string, password: string): Promise<number> => {
    // Genera un ID único para el nuevo par de credenciales
    const newCredentialId = credentials.length + 1;

    // Crea un nuevo par de credenciales
    const newCredential: ICredential = {
        id: newCredentialId,
        username,
        password
    };

    // Guarda el nuevo par de credenciales en la lista "credentials"
    credentials.push(newCredential);

    // Devuelve el ID del nuevo par de credenciales creado
    return newCredentialId;
};

export const validateCredentials = async (username: string, password: string): Promise<number | null> => {
    // Busca el nombre de usuario en la lista de credenciales
    const foundCredential = credentials.find(credential => credential.username === username);

    // Si no se encuentra el nombre de usuario, devuelve null
    if (!foundCredential) {
        return null;
    }

    // Si se encuentra el nombre de usuario, verifica si la contraseña coincide
    if (foundCredential.password === password) {
        // Devuelve el ID del par de credenciales si la contraseña es correcta
        return foundCredential.id;
    } else {
        // Devuelve null si la contraseña no coincide
        return null;
    }
};
