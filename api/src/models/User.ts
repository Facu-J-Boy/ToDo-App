import {Model, Column, Table, DataType} from 'sequelize-typescript';

@Table
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
    email!: string
}