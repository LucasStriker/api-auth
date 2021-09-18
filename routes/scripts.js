const express = require('express')
const router = express.Router()
const mysql = require("../mysql").pool

const scriptsControllers = require('../controllers/scripts-c')

router.get('/ip/:ip', scriptsControllers.checkIp)
router.get('/versao/:script', scriptsControllers.getVersion)
router.get('/msgs/:script', scriptsControllers.getMsgs)
router.post('/ua', scriptsControllers.unauthorizedAccess)
// router.get('/codes/:script', scriptsControllers.getCodes)

module.exports = router

