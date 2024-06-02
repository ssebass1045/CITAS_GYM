// GET /turns => obtener todos los turnos
// GET /turns/:id => obtener un turno por id

//POST /turns/schedule => crear un nuevo turno

//PUT /turns/cancel => cancelar un turno

import { Router } from "express";
import { getAllTurns, getTurnById, agendar, cancelar } from "../controllers/turnsController";

const turnsRouter = Router();

turnsRouter.get('/', getAllTurns);
turnsRouter.get('/:turnId', getTurnById);
turnsRouter.post('/agendar', agendar);
turnsRouter.put('/cancelar/:turnId', cancelar);

export default turnsRouter;