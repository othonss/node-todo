const Task = require('../models/Task')

module.exports = class TaskController {

    static createTask(req, res){
        res.render('tasks/create')
    }

    //Função responsável por criar as tarefas (CRUD = C)
    static async createTaskSave(req, res){
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        await Task.create(task)
        res.redirect('/tasks')
    }

    //Função responsável por mostrar as tarefas na tela principal (CRUD = R)
    static async showTasks(req, res){
        const tasks = await Task.findAll({raw: true})
        res.render('tasks/all', {tasks})
    }

    //Funções responsáveis por atualizar informações e status das tarefas  (CRUD = U)
    static async updateTask(req, res){
        const id = req.params.id
        const task = await Task.findOne({where: {id: id}, raw: true})
        res.render('tasks/edit', {task})
    }

    static async updateTaskPost(req, res){
        const id = req.body.id
        const task = {
            title: req.body.title,
            description: req.body.description,
        }
        await Task.update(task, {where: {id: id}})
        res.redirect('/tasks')
    }

    static async toggleTaskStatus(req, res){
        const id = req.body.id
        const task = {
            done: req.body.done === '0' ? true  : false
        }

        await Task.update(task, {where: {id: id}})
        res.redirect('/tasks')
    }

    //Função responsável por deletar tarefas (CRUD = D)
    static async removeTask(req, res){
        const id = req.body.id
        await Task.destroy({where: {id: id}})
        res.redirect('/tasks')
    }
}