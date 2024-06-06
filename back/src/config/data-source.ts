import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Turn } from "../entities/Turn"
import { Credential } from "../entities/Credential"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ssebass1045",
    database: "pm3_ssebass",
    //dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [Credential, User, Turn],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const TurnModel = AppDataSource.getRepository(Turn)
export const CredentialModel = AppDataSource.getRepository(Credential)