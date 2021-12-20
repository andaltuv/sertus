import Sequelize from 'sequelize';
import sequelize from '../database/database';

const User = sequelize.define('user',{

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    username: {
        type:Sequelize.STRING
    },

    password: {
        type: Sequelize.STRING,
    }

},{
    paraonid:true
});

export default User;