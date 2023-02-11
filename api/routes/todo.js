const express = require("express");
// const app = express();
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
     res.json(todoList);
});

module.exports = router;




