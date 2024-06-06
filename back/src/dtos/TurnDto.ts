import { TurnStatus } from "../entities/Turn";

interface CreateTurnDto {
    date: string;
    time: string;
    userId: number;
    status: TurnStatus;
    description: string;
}

export default CreateTurnDto;
