import { Sequelize } from 'sequelize';

const db = new Sequelize('synrgy_ch6_jwt', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;
