import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OptionEntity} from "../option.entity";

@Entity()
export class WineEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  wine_id: number

  @Column({unique: true})
  wine_name: string

  @OneToMany(type => OptionEntity, option => option.wine)
  options: OptionEntity[];

}
