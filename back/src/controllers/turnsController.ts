import { Request, Response } from "express";

export const getAllTurns = async (req: Request, res: Response) => {
    res.status(200).json({ message: "All turns"})
};

export const getTurnById = async (req: Request, res: Response) => {
    res.status(200).json({ message: "detalle de un turno especifico"})
};

export const agendar = async (req: Request, res: Response) => {
    res.status(200).json({ message: "agendar nuevo turno"})
};

export const cancelar = async (req: Request, res: Response) => {
    res.status(200).json({ message: "cancelar un turno"})
};