import { BasicEntity } from "src/persistence/basic.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UserEntity extends BasicEntity {
  @Column()
  name: string;
}
