import {Model, Column, Table, DataType} from 'sequelize-typescript';

@Table
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
}