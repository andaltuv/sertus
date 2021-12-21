import Sequelize from 'sequelize';
import sequelize from '../database/database';
import Client from './ClientModel';
import Heater from './HeaterModel';

const Service = sequelize.define('service',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    service_type: {
        type:Sequelize.STRING
    },

    service_description:{
        type:Sequelize.STRING
    },

    service_spare_parts:{
        type:Sequelize.STRING
    },

    service_date:{
        type:Sequelize.STRING
    },

    service_price:{
        type:Sequelize.FLOAT
    },

    payment_status:{
        type:Sequelize.STRING,
        defaultValue:"not paid"
    },

}, {
    paranoid:true
});

Client.hasMany(Service);
Service.belongsTo(Client);

Service.hasMany(Heater);
Heater.belongsTo(Service);

export default Service;