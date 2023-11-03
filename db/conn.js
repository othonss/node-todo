const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('b5mf5iptccpidtsz4g83', 'uhjthewnfgkfsq9r', 'GoIP07QAtLgIvoqvYyau', {
    host: 'b5mf5iptccpidtsz4g83-mysql.services.clever-cloud.com',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')

} catch (error) {

    console.log(`Não foi possível conectar ao banco nodemvc ${error}`)

}

module.exports = sequelize