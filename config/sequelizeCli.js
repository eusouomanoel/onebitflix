module.exports = { //Exportar um objeto de configuração para sequelize trabalhar e se conectar com o banco
    development: {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'onebitflix_development',
        username: 'onebitflix',
        password: 'onebitflix'
    }
}