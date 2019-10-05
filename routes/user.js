const express = require('express');
const router = express.Router();

const createController = require('../controllers/createlist');

// add-product => GET
router.get('/add-product', createController.getAddTodoList);

// add-product => POST
router.post('/add-product', createController.postAddTodoList);

exports.routes = router;
