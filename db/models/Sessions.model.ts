import { Model, DataType, InferAttributes, InferCreationAttributes, ForeignKey, DataTypes } from 'sequelize';
import { Database } from '../db';

/**@Associations */
import Users from './Users.model';

export interface ISessions {
    SessionId: string;
    UserId: string;
    ExpiresAt: Date;
    CreatedAt: Date;
    UpdatedAt: Date;
    IsActive: boolean;
}

class Sessions extends Model<InferAttributes<Sessions>, InferCreationAttributes<Sessions>>{
    declare SessionId: string;
    declare UserId: ForeignKey<Users['UserId']>;
    declare ExpiresAt: Date;
    declare CreatedAt: Date;
    declare UpdatedAt: Date;
    declare IsActive: boolean;
}

Sessions.init(
    {
        SessionId: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        UserId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')
        },
        ExpiresAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')
        },
        UpdatedAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {
        tableName: 'Sessions',
        indexes: [
            {
                unique: true,
                fields: ['SessionId']
            }
        ],
        createdAt: 'CreatedAt',
        updatedAt: 'UpdatedAt',
        sequelize: Database
    }
)

export default Sessions;