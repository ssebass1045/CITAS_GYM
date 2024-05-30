// GET /users => obtener todos los usuarios
// GET /users/:id => obtener un usuario por id

//POST /users/register => Crear un nuevo usuario

import { Router } from "express";
import { getAllUsers, getUserById, register, login } from "../controllers/usersController";

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;