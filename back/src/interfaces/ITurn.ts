export enum TurnStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
}

export interface ITurn {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: TurnStatus;
    description: string;
}

