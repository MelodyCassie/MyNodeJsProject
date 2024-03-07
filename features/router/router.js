const express = require('express');
const router = express.Router();
const {register} = require('../controller/userController');
const {login} = require("../service/userService");


router.route('/register').post(register);
router.route('/login').post(login)

module.exports = router;