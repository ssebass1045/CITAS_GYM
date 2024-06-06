import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

export enum TurnStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
}

@Entity({
    name: "turns"
})
export class Turn {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string

    @Column()
    description: string

    @Column({
        type: "enum",
        enum: TurnStatus,
        default: TurnStatus.ACTIVE
    })
    status: TurnStatus

    @ManyToOne(() => User, user => user.turns)
    user: User
}
