import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Priority } from '../enums/Priority'
import { Status } from '../enums/Status'

// This class will never be instantiated, but will be used by TypeORM
// That's why we set strictPropertyInitialization in package.json to be false
@Entity()
export class Task {
  // uuid strategy as a primary key for each entry created in db
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'text'
  })
  title: string

  @Column({
    type: 'varchar',
    length: 255
  })
  date: string

  @Column({
    type: 'longtext'
  })
  description: string

  // TypeORM automatically infer that we want to use 1 of 3 value in the enum
  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.Normal
  })
  priority: Priority

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Todo
  })
  status: Status
}
