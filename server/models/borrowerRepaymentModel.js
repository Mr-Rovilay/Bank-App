import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

const Repayment = sequelize.define('borrower-Repayment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { 
      min: 0.01,  // Ensure the amount is positive
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  loanId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Loans',
      key: 'id',
    },
  },
  borrowerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

export default Repayment;