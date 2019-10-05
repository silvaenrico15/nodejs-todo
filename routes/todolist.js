const express = require('express');

const todoController = require('../controllers/todolist');

const router = express.Router();

router.get('/', todoController.getTodoList);

module.exports = router;
