import { Router } from "express";
import { createCredential, verifyCredential } from "../controllers/credentialsController";

const credentialsRouter = Router();

credentialsRouter.post('/create', createCredential);
credentialsRouter.post('/verify', verifyCredential);

export default credentialsRouter;
