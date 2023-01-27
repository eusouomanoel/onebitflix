import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix_development',
    username: 'onebitflix',
    password: 'onebitflix',
    define: {
        underscored: true  //Em geral no banco de dados é utilizado snake_case, mas no javascript é utilizado em camelCase. 
        //Se estiver como verdadeiro, sera trnasformado de snake_case (DB) para camelCase(Javascript)
    }
})