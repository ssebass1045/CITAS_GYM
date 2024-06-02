// GET /users => obtener todos los usuarios
// GET /users/:id => obtener un usuario por id

//POST /users/register => Crear un nuevo usuario

import { Router } from "express";
import { getAllUsers, getUserById, register, login } from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);
usersRouter.post('/register', register);
usersRouter.post('/login', login);

export default usersRouter;