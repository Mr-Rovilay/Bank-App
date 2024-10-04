import { DataTypes } from 'sequelize';
import { sequelize } from './db/db.js';

const Setting = sequelize.define('Setting', {
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    repaymentTerm: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fees: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    termsOfService: {
        type: DataTypes.TEXT, 
        allowNull: true, 
    },
    privacyPolicy: {
        type: DataTypes.TEXT, 
        allowNull: true, 
    },
}, {
    timestamps: false,
    tableName: 'settings',
});

export default Setting;


