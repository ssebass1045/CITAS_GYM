// usersService.ts

import { IUser } from '../interfaces/IUser';
import { createCredentials } from './credentialsService';

const users: IUser[] = []; // Almacenará los usuarios

export const getAllUsers = async (): Promise<IUser[]> => {
    // Devuelve todos los usuarios
    return users;
};

export const getUserById = async (id: number): Promise<IUser | null> => {
    // Busca un usuario por su ID
    const user = users.find(u => u.id === id);
    return user || null;
};

export const register = async (newUser: IUser): Promise<number> => {
    // Genera un ID único para el nuevo usuario
    const newUserId = users.length + 1;

    // Crea las credenciales para el nuevo usuario
    const credentialsId = await createCredentials(newUser.email, 'contraseña'); // Usamos el correo electrónico como nombre de usuario y una contraseña temporal

    // Asigna las credenciales al nuevo usuario
    newUser.credentialsId = credentialsId;

    // Agrega el nuevo usuario a la lista de usuarios
    users.push(newUser);

    // Devuelve el ID del nuevo usuario registrado
    return newUserId;
};
