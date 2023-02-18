const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Rendering Angular App
app.use(express.static(__dirname + '/dist/todo-ui'));

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '/dist/todo-ui', 'index.html'));
});

// Routers
app.use('/api/todo', require('./api/routes/todo'));

app.listen(4300);