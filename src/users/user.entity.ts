import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OptionEntity} from "../option.entity";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  user_id: number

  @Column()
  user_name: string

  @Column()
  user_role: string

  @Column()
  user_pass: string

  @Column()
  first_name: string

  @Column()
  last_name: string


}
