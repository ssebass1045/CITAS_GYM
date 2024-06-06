// import { Request, Response } from "express";
// import * as turnsService from '../services/turnsService';
// import { ITurn } from '../interfaces/ITurn';

// export const getAllTurns = async (req: Request, res: Response) => {
//     try {
//         const turns = await turnsService.getAllTurns();
//         res.status(200).json(turns);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const getTurnById = async (req: Request, res: Response) => {
//     const id = parseInt(req.params.turnId);
//     console.log('ID del turno solicitado:', id);
//     try {
//         const turn = await turnsService.getTurnById(id);
//         console.log('Turno obtenido:', turn);
//         if (turn) {
//             res.status(200).json(turn);
//         } else {
//             res.status(404).json({ message: 'Turn not found' });
//         }
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const agendar = async (req: Request, res: Response) => {
//     const newTurn: ITurn = req.body;
//     try {
//         const turnId = await turnsService.agendarTurn(newTurn);
//         res.status(201).json({ id: turnId, message: 'Turn agendado successfully' });
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const cancelar = async (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     try {
//         const success = await turnsService.cancelTurn(id);
//         if (success) {
//             res.status(200).json({ message: 'Turn cancelled successfully' });
//         } else {
//             res.status(404).json({ message: 'Turn not found' });
//         }
//     } catch (error:any) {
//         res.status(500).json({ message: error.message });
//     }
// };

import { Request, Response } from "express";
import * as turnsService from "../services/turnsService";
import CreateTurnDto from "../dtos/TurnDto";

export const getAllTurns = async (req: Request, res: Response) => {
    try {
        const turns = await turnsService.getAllTurns();
        res.status(200).json(turns);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTurnById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.turnId);
    try {
        const turn = await turnsService.getTurnById(id);
        if (turn) {
            res.status(200).json(turn);
        } else {
            res.status(404).json({ message: 'Turn not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const agendar = async (req: Request, res: Response) => {
    const turnDto: CreateTurnDto = req.body;
    try {
        const newTurn = await turnsService.createTurn(turnDto);
        res.status(201).json(newTurn);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const cancelar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.turnId);
    try {
        const updatedTurn = await turnsService.cancelTurn(id);
        if (updatedTurn) {
            res.status(200).json(updatedTurn);
        } else {
            res.status(404).json({ message: 'Turn not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
