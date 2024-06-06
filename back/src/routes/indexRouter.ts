import { Router } from "express";
import usersRouter from "./usersRouter";
import turnsRouter from "./turnsRouter";
import credentialsRouter from "./credentialsRouter";
import auth from "../middlewares/autenticacion";

const indexRouter = Router();

indexRouter.use('/users', usersRouter);
indexRouter.use('/turns', turnsRouter);
indexRouter.use('/credentials', credentialsRouter);


export default indexRouter;