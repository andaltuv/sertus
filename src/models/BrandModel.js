import Sequelize from 'sequelize';
import sequelize from '../database/database';

const Brand = sequelize.define('brand',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    brand_name:{
        type:Sequelize.STRING
    }
},{
    paranoid:true
});

export default Brand;