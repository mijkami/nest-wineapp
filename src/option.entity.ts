import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OptionValuesEntity} from "./option-values.entity";
import {WineEntity} from "./wines/wine.entity";

@Entity()
export class OptionEntity extends BaseEntity{

  @PrimaryGeneratedColumn()
  option_id: number

  @Column()
  option_name: string

  @ManyToOne(type => WineEntity, wine => wine.options)
  wine: WineEntity;

  @OneToMany(type => OptionValuesEntity, optionValue => optionValue.option)
  optionValues: OptionValuesEntity[];

}
