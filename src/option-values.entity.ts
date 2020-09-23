import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {OptionEntity} from "./option.entity";

@Entity()
export class OptionValuesEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  value_id: number

  @Column()
  value_name: string

  @Column()
  value_add_info: string

  @ManyToOne(type => OptionEntity, option => option.optionValues)
  option: OptionEntity;

}
