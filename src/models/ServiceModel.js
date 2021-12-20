import Sequelize from 'sequelize';
import sequelize from '../database/database';
import Client from './ClientModel';

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

    service_spare_pars:{
        type:Sequelize.STRING
    },

    service_date:{
        type:Sequelize.STRING
    },

    service_price:{
        type:Sequelize.FLOAT
    },

    payment_status:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },

}, {
    paranoid:true
});

Client.hasMany(Service);
Service.belongsTo(Client);

export default Service;