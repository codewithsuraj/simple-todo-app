const express = require("express");
const { formatErrorMessage } = require("../service/common");
const { validateTodoPost, validateTodoPut } = require("../service/todo");
const router = express.Router();

const todoList = [
     {
          id: 1,
          task: "Task Name 1",
          isCompleted: false
     },
     {
          id: 2,
          task: "Task Name 2",
          isCompleted: false
     },
     {
          id: 3,
          task: "Task Name 3",
          isCompleted: false
     }
]

router.get('/', (req, res) => {
     res.status(200).json(todoList);
});

router.post('/', (req, res) => {
     const { error } = validateTodoPost(req.body);

     if (error) return res.status(400).json({ message: formatErrorMessage(error) })

     const newTodo = {
          id: todoList.length + 1,
          task: req.body.task,
          isCompleted: req.body.isCompleted
     }

     todoList.push(newTodo);

     res.status(201).json({ message: 'New todo is added successfully' });
});

router.put('/', (req, res) => {
     const { error } = validateTodoPut(req.body);
     if (error) return res.status(400).json({ message: formatErrorMessage(error) })

     let todo = todoList.find(todo => todo.id === req.body.id);

     if (!todo) return res.status(404).json({ message: 'Todo item not found' });

     todo.task = req.body.task;
     todo.isCompleted = req.body.isCompleted;

     res.status(201).json({ message: 'The todo is updated successfully' });
});

router.delete('/:id', (req, res) => {
     const index = todoList.findIndex(todo => todo.id === parseInt(req.params.id));

     if (index === -1) return res.status(404).json({ message: 'Todo item not found' });

     todoList.splice(index, 1);

     return res.status(200).json({ message: 'The todo is deleted successfully' });
});

// router.delete('/', (req, res) => {
//      const index = todoList.findIndex(todo => todo.id === parseInt(req.body.id));

//      if (index === -1) return res.status(404).json({ message: 'Todo item not found' });

//      todoList.splice(index, 1);

//      return res.status(200).json({ message: 'The todo is deleted successfully' });
// });

// router.delete('/', (req, res) => {
//      const index = todoList.findIndex(todo => todo.id === parseInt(req.query.id));

//      if (index === -1) return res.status(404).json({ message: 'Todo item not found' });

//      todoList.splice(index, 1);

//      return res.status(200).json({ message: 'The todo is deleted successfully' });
// });



module.exports = router;




