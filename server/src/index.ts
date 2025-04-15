import cors from 'cors';
import express, { Express } from 'express';
import { rostersRoutes } from './routes/rosters';

const app: Express = express();
const port = process.env.APP_PORT || 8080;

// cors middleware (https://www.npmjs.com/package/cors)
app.use(cors());
// cors with no arguments permits cors request for all routes
// var corsOptions = { origin: `http://localhost:${process.env.ROSTERS_DB_PORT}` };
// cors can also be used to protect individual routes
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/', rostersRoutes);

// Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
