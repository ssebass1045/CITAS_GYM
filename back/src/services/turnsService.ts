// turnsService.ts

import { ITurn } from '../interfaces/ITurn';

const turns: ITurn[] = []; // Almacenará los turnos

export const getAllTurns = async (): Promise<ITurn[]> => {
    // Devuelve todos los turnos
    return turns;
};

export const getTurnById = async (id: number): Promise<ITurn | null> => {
    // Busca un turno por su ID
    console.log('Buscando turno con ID:', id);
    const turn = turns.find(t => t.id === id);
    console.log('Turno encontrado:', turn);
    return turn || null;
};

export const agendarTurn = async (newTurn: ITurn): Promise<number> => {
    // Genera un ID único para el nuevo turno
    const newTurnId = turns.length + 1;

    // Asigna el nuevo ID al turno
    newTurn.id = newTurnId;

    // Agrega el nuevo turno a la lista de turnos
    turns.push(newTurn);

    // Devuelve el ID del nuevo turno programado
    return newTurnId;
};

export const cancelTurn = async (id: number): Promise<boolean> => {
    // Busca el turno por su ID
    const index = turns.findIndex(turn => turn.id === id);

    // Si el turno no existe, devuelve false
    if (index === -1) {
        return false;
    }

    // Elimina el turno de la lista de turnos
    turns.splice(index, 1);

    // Devuelve true para indicar que la cancelación fue exitosa
    return true;
};
