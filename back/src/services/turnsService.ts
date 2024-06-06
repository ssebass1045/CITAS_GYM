// // turnsService.ts

// import { ITurn } from '../interfaces/ITurn';

// const turns: ITurn[] = []; // Almacenará los turnos

// export const getAllTurns = async (): Promise<ITurn[]> => {
//     // Devuelve todos los turnos
//     return turns;
// };

// export const getTurnById = async (id: number): Promise<ITurn | null> => {
//     // Busca un turno por su ID
//     console.log('Buscando turno con ID:', id);
//     const turn = turns.find(t => t.id === id);
//     console.log('Turno encontrado:', turn);
//     return turn || null;
// };

// export const agendarTurn = async (newTurn: ITurn): Promise<number> => {
//     // Genera un ID único para el nuevo turno
//     const newTurnId = turns.length + 1;

//     // Asigna el nuevo ID al turno
//     newTurn.id = newTurnId;

//     // Agrega el nuevo turno a la lista de turnos
//     turns.push(newTurn);

//     // Devuelve el ID del nuevo turno programado
//     return newTurnId;
// };

// export const cancelTurn = async (id: number): Promise<boolean> => {
//     // Busca el turno por su ID
//     const index = turns.findIndex(turn => turn.id === id);

//     // Si el turno no existe, devuelve false
//     if (index === -1) {
//         return false;
//     }

//     // Elimina el turno de la lista de turnos
//     turns.splice(index, 1);

//     // Devuelve true para indicar que la cancelación fue exitosa
//     return true;
// };


import { Turn } from "../entities/Turn";
import { TurnModel, UserModel } from "../config/data-source";
import CreateTurnDto from "../dtos/TurnDto";
import { TurnStatus } from "../entities/Turn";

export const getAllTurns = async (): Promise<Turn[]> => {
    return await TurnModel.find({ relations: ["user"] });
};

export const getTurnById = async (id: number): Promise<Turn | null> => {
    return await TurnModel.findOne({ where: { id }, relations: ["user"] });
};

export const createTurn = async (turnDto: CreateTurnDto): Promise<Turn> => {
    const newTurn = TurnModel.create(turnDto);
    const user = await UserModel.findOneBy({ id: turnDto.userId });

    if (user) {
        newTurn.user = user;
        newTurn.status = TurnStatus.ACTIVE;
        await TurnModel.save(newTurn);
    } else {
        throw new Error('User not found');
    }

    return newTurn;
};

export const cancelTurn = async (id: number): Promise<Turn | null> => {
    const turn = await TurnModel.findOne({ where: { id } });

    if (turn) {
        turn.status = TurnStatus.CANCELLED;
        await TurnModel.save(turn);
        return turn;
    }

    return null;
};
