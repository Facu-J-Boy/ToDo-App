import {Model, Column, Table, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'todos', timestamps: false })
export class ToDo extends Model<ToDo> {
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