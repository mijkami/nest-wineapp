import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OptionValues} from "./option-values.entity";

@Entity()
export class Option {

  @PrimaryGeneratedColumn()
  option_id: number

  @Column()
  option_name: string

  @Column()
  wine_id: number

  @OneToMany(type => OptionValues, optionValues => optionValues.value_id, {cascade: ['insert']})
  optionValues: OptionValues[];

}
