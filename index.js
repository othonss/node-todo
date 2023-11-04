//Importação dos módulos externos
const express = require('express')
const exphbs = require('express-handlebars')
const path = require("path")

const PORT = process.env.PORT
const app = express()

const conn = require('./db/conn')

//Importação dos módulos
const Tasks = require('./models/Task')

//Importação das rotas
const taskRoutes = require('./routes/tasksRoutes')

//Para dizer ao express que a template engine será a do Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts")
}))
app.set('view engine', 'handlebars')
app.set("views", path.join(__dirname, "views"))

//Criação do middlewares para ler o corpo da requisição
app.use(
    express.urlencoded({
        extended: true
    })
)

//Criação do middleware para ler o formato JSON
app.use(express.json())

//Definição da pasta estática
//app.use(express.static('public'))
//app.use(express.static(__dirname + '../' + '/public'))
app.use('/', express.static(__dirname + '/public'))

//Utilização das rotas
app.use('/tasks', taskRoutes)

//Execução do servidor
conn
    .sync(

    )
    .then(
        () => {
            app.listen(PORT || 5000)
        }
    )
    .catch(
        (error) => console.log("Não foi possível achar a porta", error)
    )