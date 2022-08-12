const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getplayers)
Router.get('/:player_id', controller.getplayer)
Router.post('/:player_id', controller.registerPlayer)

module.exports = Router