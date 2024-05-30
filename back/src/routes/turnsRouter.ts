// GET /turns => obtener todos los turnos
// GET /turns/:id => obtener un turno por id

//POST /turns/schedule => crear un nuevo turno

//PUT /turns/cancel => cancelar un turno

import { Router } from "express";
import { getAllTurns, getTurnById, agendar, cancelar } from "../controllers/turnsController";

const turnRouter = Router();

turnRouter.get('/', getAllTurns);
turnRouter.get('/:turnId', getTurnById);
turnRouter.post('/agendar', agendar);
turnRouter.put('/cancelar/:turnId', cancelar);

export default turnRouter;