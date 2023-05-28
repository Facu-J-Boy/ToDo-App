import {Model, Column, Table, DataType, HasMany} from 'sequelize-typescript';
import { ToDo } from './ToDo';

interface UserAttributes {
  id: string;
  email: string;
}

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<UserAttributes> {
    @Column({
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @HasMany(() => ToDo, 'userId') 
    todos!: ToDo[]

    setToDo(todo: ToDo): void {
        !this.todos?
          this.todos = []
        :
        this.todos.push(todo);
        this.save();
      }
}