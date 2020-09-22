import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class OptionValues {

  @PrimaryGeneratedColumn()
  value_id: number

  @Column()
  value_name: string

  @Column()
  value_add_info: string

  @Column()
  wine_id: number

  @Column()
  option_id: number

}
