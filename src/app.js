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


app.use(api + 'login', LoginRoutes);
app.use(api + 'brand', BrandRoutes);

async function buildDb(){
    await sequelize.sync({force:true});
  }
  
   //buildDb();

export default app;