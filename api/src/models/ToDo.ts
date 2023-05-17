import {Model, Column, Table, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'todos', timestamps: false })
export class ToDo extends Model<ToDo> {
    setUser(user: User) {
        throw new Error("Method not implemented.");
    }
    @Column({
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    id!: string;
    
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    text!: string

    @ForeignKey(() => User)
      @Column
      userId!: string


    @BelongsTo(() => User)
    user!: User
    
}