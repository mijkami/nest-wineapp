import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Option} from "../option.entity";

@Entity()
export class Wine {

  @PrimaryGeneratedColumn()
  wine_id: number

  @Column()
  wine_name: string

  @OneToMany(type => Option, option => option.option_id, {cascade: ['insert']})
  options: Option[];

}
