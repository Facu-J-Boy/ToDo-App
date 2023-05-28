import {Model, Column, Table, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { User } from './User';

interface TodoAttributes {
  id: string,
  text: string
}

@Table({ tableName: 'todos', timestamps: false })
export class ToDo extends Model<TodoAttributes> {
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

    @Column({
      type: DataType.INTEGER,
      allowNull: false
    })
    order!: number;

    @ForeignKey(() => User)
      @Column({
        type: DataType.STRING,
        allowNull: false
      })
      userId!: string


    @BelongsTo(() => User)
    user!: User    
}