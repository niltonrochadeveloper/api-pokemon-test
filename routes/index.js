const express = require('express')
const router = express.Router()

const indexController = require('../controllers/indexController')

//home
router.get('/', indexController.index)
router.get('/pokemon/:name', indexController.pokemon)

module.exports = router
