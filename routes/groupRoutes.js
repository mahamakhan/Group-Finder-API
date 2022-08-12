const Router = require('express').Router()
const controller = require('../controllers/groupController')

Router.get('/', controller.getAllGroups)
Router.get('/:group_id', controller.getGroup)
Router.post('/:group_id', controller.createGroup)
Router.put('/:group_id', controller.updateGroup)
Router.delete('/:group_id', controller.deleteGroup)

module.exports = Router