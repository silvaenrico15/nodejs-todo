const Todolist = require('../models/createlist');


exports.getTodoList = (req, res, next) => {
  Todolist.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('admin/add-todolist', {
        prods: rows,
        pageTitle: 'All Todo List',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};