const TodoList = require('../models/createlist');

exports.getAddTodoList = (req, res, next) => {
  res.render('admin/add-todolist', {
    pageTitle: 'Add Todo List',
    path: '/'
  });
};

exports.postAddTodoList = (req, res, next) => {
  const message = req.body.title;
  const todolist = new TodoList(message);
  console.log(todolist);
  todolist
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};