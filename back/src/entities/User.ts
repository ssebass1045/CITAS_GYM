
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Credential } from "./Credential"
import { Turn } from "./Turn"

@Entity({
    name: "users"
}) // users
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthday: string

    @Column()
    nDni: string

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Turn, (turn => turn.user))
    turns: Turn[]
    

}