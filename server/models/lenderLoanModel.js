import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

const Loan = sequelize.define('Loan-lender', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    borrowerId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending', // Options: Pending, Approved, Funded
    },
}, {
    timestamps: true,
});

export default Loan;