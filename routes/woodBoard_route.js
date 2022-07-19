const Router = require('express')
const router = new Router()
const WoodBoardsController = require('../controllers/woodBoard_controller')

router.get('/getTable', WoodBoardsController.getWoodBoards)






module.exports = router