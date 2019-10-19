const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

//Include custom routes
const listRoutes = require('./routes/todolist');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/font', express.static(path.join(__dirname,'node_modules/@mdi/font')));

app.use(listRoutes);

app.use((req, res, next) => {
  res.status(404).render('404',
    {
      pageTitle: '404 - Page Not Found',
      path: ""
    });
});

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`));
