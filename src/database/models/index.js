import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configPath from '../config/config';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configPath[env];

const db = {};
let sequelize
    if (process.env.DATABASE_URL) {
        // the application is executed on Heroku ... use the postgres database
        sequelize =new Sequelize(process.env.DATABASE_URL,
            {
                dialect: "postgres",
                protocol: "postgres",
                port: 5432,
                host: "ec2-52-7-39-178.compute-1.amazonaws.com",
                logging: true //false
            });
    } else {
// the application is executed on the local machine ... use mysql
        sequelize =new Sequelize("postgres://<username>:<password>@<host>:  <port>/<database>",
            {
                dialect: "postgres"
            }
        );
    }

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

export default db;
