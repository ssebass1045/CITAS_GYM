import { Request, Response } from "express";
import * as userService from '../services/usersService';
import { IUser } from '../interfaces/IUser';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const user = await userService.getUserById(id);
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
    const newUser: IUser = req.body;
    try {
        const userId = await userService.register(newUser);
        res.status(201).json({ id: userId, message: 'User created successfully' });
    } catch (error: any) { 
        res.status(500).json({ message: error.message });
    }
};


export const login = async (req: Request, res: Response) => {
    res.status(200).json({ message: "login del usuario"})
};