const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Tasks = db.define(process.env.DB_DBNAME, {
    title:{
       type: DataTypes.STRING,
       require: true 
    },
    description:{
        type: DataTypes.STRING,
        require: true 
     },
     done:{
        type: DataTypes.BOOLEAN,
        require: true 
     }
})

module.exports = Tasks