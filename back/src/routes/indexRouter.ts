import { Router } from "express";
import userRouter from "./userRouter";
import turnRouter from "./turnsRouter";
import auth from "../middlewares/autenticacion";

const indexRouter = Router();

indexRouter.use('/users', userRouter);
indexRouter.use('/turns', turnRouter);


export default indexRouter;