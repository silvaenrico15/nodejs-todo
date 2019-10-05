const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

//Set default template engine
app.set('view engine', 'ejs');

//Include custom routes
const adminData = require('./routes/user');
const shopRoutes = require('./routes/todolist');

//To parse incoming body, without it you will get undefined value.
app.use(bodyParser.urlencoded({ extended: false }));
//To set our public files such as css and js
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/fonts', express.static(path.join(__dirname,'node_modules/@mdi/font')));
//We tell our app to custom routes that we had included
app.use(adminData.routes);
app.use(shopRoutes);
//Default route when page is not found
app.use((req, res, next) => {
  res.status(404).render('404',
    {
      pageTitle: '404 - Page Not Found',
      path: ""
    });
});

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`));
