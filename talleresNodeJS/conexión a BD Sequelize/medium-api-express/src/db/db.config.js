import { Sequelize } from "sequelize"; 

export const sequelize = new Sequelize(
    'bd_express_sequelize', 'root', 'root', 
    { 
        dialect: 'mysql', host: 'localhost' 
    });