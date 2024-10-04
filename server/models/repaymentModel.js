import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

const Repayment = sequelize.define('Repayment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    loanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Loans',
            key: 'id',
        },
    },
    lenderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    borrowerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    repaymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
});

export default Repayment;