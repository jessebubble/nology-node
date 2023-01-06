import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "students_db",
    "root",
    "password",
    {
        dialect: "mysql",
        host: "localhost",
    }
);