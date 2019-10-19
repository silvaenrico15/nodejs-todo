const express = require('express');

const todoController = require('../controllers/list');

const router = express.Router();

router.get('/', todoController.getTodoList);
router.get('/:id', todoController.deleteTask);
router.get('/list/:id/update', todoController.getUpdateTask);

router.post('/list/:id', todoController.postupdateTask);
router.post('/list', todoController.postAddTodoList);


module.exports = router;
