import { DataTypes } from 'sequelize';
import {sequelize} from "../db/db.js"
import User from './userModel.js';



const SupportRequest = sequelize.define('SupportRequest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Pending', 'In Progress', 'Resolved'),
        defaultValue: 'Pending',
    },
}, {
    timestamps: true,
});

SupportRequest.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(SupportRequest, { foreignKey: 'userId' });

export default SupportRequest;