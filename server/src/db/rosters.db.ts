import { Sequelize } from 'sequelize';

import rostersConfig from '../config/rosters.config';

const env = process.env.NODE_ENV || 'development';

const options = rostersConfig[env];

const sequelize = new Sequelize(
  options.database as string, 
  options.username as string, 
  options.password as string, 
  {
    host: options.host,
    dialect: options.dialect,
    pool: { ...options.pool },
    logging: console.log
  }
);

// Replace this with sequelize CLI
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log('Creating tables ===================');
    sequelize.sync().then(() => {
        console.log('=============== Tables created per model');
    })
    .catch(err => {
        console.error('Unable to create tables:', err);    
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

export { sequelize };