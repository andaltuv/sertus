import express, { json } from 'express';
var cors = require('cors');
import morgan from 'morgan';
import sequelize from './database/database';

const app = express();
const api = '/api/v1/';
app.use(morgan('dev'));
app.use(cors());
app.use(json());

import User from './models/UserModel';
import Brand from './models/BrandModel';
import Heater from './models/HeaterModel';
import Client from './models/ClientModel';
import Service from './models/ServiceModel';


import LoginRoutes from './routes/LoginRoutes';
import BrandRoutes from './routes/BrandRoutes';
import ClientRoutes from './routes/ClientRoutes';
import HeaterRoutes from './routes/HeaterRoutes';
import ServiceRoutes from './routes/ServiceRoutes';

app.use(api + 'login', LoginRoutes);
app.use(api + 'brand', BrandRoutes);
app.use(api + 'client', ClientRoutes);
app.use(api + 'heater', HeaterRoutes);
app.use(api + 'service', ServiceRoutes);

async function buildDb(){
    await sequelize.sync({force:true});
  }
  
   //buildDb();

export default app;