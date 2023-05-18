import {Model, Column, Table, DataType, HasMany} from 'sequelize-typescript';
import { ToDo } from './ToDo';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {
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
    name!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @HasMany(() => ToDo, 'todosId')
    todos!: ToDo[]

    setToDo(todo: ToDo): void {
        this.todos.push(todo);
    }
}