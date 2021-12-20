import Sequelize from 'sequelize';
import sequelize from '../database/database';
import Heater from './HeaterModel';

const Client = sequelize.define('client',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    first_name:{
        type:Sequelize.STRING
    },
    last_name:{
        type:Sequelize.STRING
    },
    phone_number:{
        type: Sequelize.STRING
    },
    cell_phone:{
        type:Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    address1: {
        type:Sequelize.STRING
    },
    address2:{
        type:Sequelize.STRING
    }
},{
    paranoid:true
});


export default Client;