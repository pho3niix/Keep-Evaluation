import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Database } from '../db';

/**@Associations */
import Sessions from './Sessions.model';
import Notes from './Notes.model';

export interface IUsers {
    UserId: string;
    Name: string;
    LastName: string;
    Email: string;
    Password: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    IsActive: boolean;
}

class Users extends Model<InferAttributes<Users>, InferCreationAttributes<Users>>{
    declare UserId: string;
    declare Name: string;
    declare LastName: string;
    declare Email: string;
    declare Password: string;
    declare CreatedAt: Date;
    declare UpdatedAt: Date;
    declare IsActive: boolean;
}

Users.init(
    {
        UserId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')
        },
        UpdatedAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: 'Users',
        indexes: [
            {
                unique: true,
                fields: ['UserId']
            }
        ],
        createdAt: 'CreatedAt',
        updatedAt: 'UpdatedAt',
        sequelize: Database
    }
)

// Users.hasMany(Notes, { sourceKey: 'UserId', foreignKey: 'UserId' });
// Users.hasMany(Sessions, { sourceKey: 'UserId', foreignKey: 'UserId' });

export default Users;