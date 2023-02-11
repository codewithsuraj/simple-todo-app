const path = require("path");
const express = require("express");

const app = express();

// Rendering Angular App
app.use(express.static(__dirname + '/dist/todo-ui'));
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/dist/todo-ui', 'index.html')); });

// Routers
app.use('/api/todo', require('./api/routes/todo'));

app.listen(4300);