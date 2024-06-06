import { Request, Response } from "express";
import * as usersService from "../services/usersService";
import CreateUserDto from "../dtos/UserDto";
import * as credentialsService from "../services/credentialsService";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await usersService.getAllUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const user = await usersService.getUserById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const register = async (req: Request, res: Response) => {
    const userDto: CreateUserDto = req.body;
    try {
        const newUser = await usersService.register(userDto);
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};



export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const credential = await credentialsService.verifyCredential(username, password);
        if (credential) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
