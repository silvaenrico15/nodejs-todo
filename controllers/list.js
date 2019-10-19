const TodoList = require('../models/createlist');

//create
exports.getAddTodoList = (req, res, next) => {
  res.render('admin/add-todolist', {
    pageTitle: 'Add Todo List',
    path: '/'
  });
};

exports.postAddTodoList = (req, res, next) => {
    const
    {
    date,
    message,
    } = req.body;
  const todolist = new TodoList(null,date, message);
  console.log(todolist);
  todolist
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

//Display
exports.getTodoList = (req, res, next) => {
    TodoList.fetchAll()
      .then(([rows, fieldData]) => {
        res.render('admin/add-todolist', {
          list: rows,
          pageTitle: 'All Todo List',
          path: '/'
        });
      })
      .catch(err => console.log(err));
  };
  
  //Delete
  exports.deleteTask = (req, res, next) => 
  {
  TodoList.deleteTask(req.params.id)
  {
      res.redirect('/');
    }
    };
    
    //Update
    exports.postupdateTask = (req, res, next) => 
    {
      const {
        id, 
        date,
        message,
      } = req.body;
      const todolist = new TodoList(id, date, message);
      console.log(todolist);
      todolist
        .update()
        .then(() => {
          res.redirect('/');
        })
        .catch(err => console.log(err));
      
      };
    
      exports.getUpdateTask = (req, res) => {
        const {
          id
        } = req.params;
      TodoList.findById(id)
      .then(([rows, fieldData]) => {
          res.render('admin/update-todolist', {
            list: rows[0],
            pageTitle: 'Edit List',
            path: ''
          });
        })
        .catch(err => console.log(err));
    };