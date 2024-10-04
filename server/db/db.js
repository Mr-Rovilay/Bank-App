import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: 'postgres',
  logging: console.log, 
});

const connectDB = async () => {
  const jwtSecret = process.env.JWT_SECRET;
  
  if (!jwtSecret) {
    console.error("JWT_SECRET is not set in the environment variables");
    process.exit(1);
  }

  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connected to database");
    return { sequelize, jwtSecret };
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
};

export { sequelize, connectDB };