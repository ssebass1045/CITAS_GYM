import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    res.status(200).json({ message: "All users"})
};

export const getUserById = async (req: Request, res: Response) => {
    res.status(200).json({ message: "A users by Id details"})
};

export const register = async (req: Request, res: Response) => {
    res.status(200).json({ message: "registro del usuario"})
};

export const login = async (req: Request, res: Response) => {
    res.status(200).json({ message: "login del usuario"})
};