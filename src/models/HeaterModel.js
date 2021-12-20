import Sequelize from 'sequelize';
import sequelize from '../database/database';
import Brand from './BrandModel';
import Client from './ClientModel';

const Heater = sequelize.define('heater',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    tecnology:{
        type:Sequelize.STRING
    },

    heater_type:{
        type: Sequelize.STRING
    },

    capacity:{
        type: Sequelize.STRING
    }

}, {
    paranoid:true
});

Brand.hasMany(Heater);
Heater.belongsTo(Brand);

Client.hasMany(Heater);
Heater.belongsToMany(Client,{through:'heater_client'});

export default Heater;