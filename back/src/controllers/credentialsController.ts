import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsService";
import CreateCredentialDto from "../dtos/CreateCredentialDto";

export const createCredential = async (req: Request, res: Response) => {
    const credentialDto: CreateCredentialDto = req.body;
    try {
        const newCredential = await credentialsService.createCredential(credentialDto);
        res.status(201).json(newCredential);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const verifyCredential = async (req: Request, res: Response) => {
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
