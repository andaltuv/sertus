import Sequelize from 'sequelize';

const sequelize = new Sequelize('gasoelect', 'root','',{
    "host": "localhost",
    "dialect": "mysql"
});

export default sequelize;