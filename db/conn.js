const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectModule: 'mysql2'
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')

} catch (error) {

    console.log(`Não foi possível conectar ao banco nodemvc ${error}`)

}

module.exports = sequelize