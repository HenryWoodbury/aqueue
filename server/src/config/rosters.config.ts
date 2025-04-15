import 'dotenv/config';
import { Options } from 'sequelize';

interface IConfigEnv {
  [key:string]: Options;
}

const playersConfig: IConfigEnv = {
  "development": {
    "username": process.env.DB_USERNAME || 'postgres',
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": process.env.DB_NAME || 'rosters_db',
    "host": process.env.DB_HOST || 'localhost',
    "port": Number(process.env.DB_PORT || 5432),
    "dialect": "postgres",
    "pool": {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000  
    }
  }
}

export default playersConfig;
