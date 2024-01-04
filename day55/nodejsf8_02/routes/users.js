var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controllers');

/* GET users listing. */
router.get('/', userController.index);
router.get('/add', userController.add);
router.post('/add', userController.handleAdd);
router.get('/edit/:id', userController.edit);
router.post('/edit/:id', userController.handleEdit);
router.post('/delete/:id', userController.handleDelete);
module.exports = router;
