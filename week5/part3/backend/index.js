const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());

//body {
  // title: string;
  // description: string;
//}

app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
      res.status(411).json({
        msg: "You sent the wrong inputs",
      })
      return;
    }
    //put it in mongoDB
});

app.get("/todos", function(req, res) { 
    
});

app.put("/completed", function(req, res) {
    const updatePayload = req.body;
    const paresePayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
      res.status(411).json({
        msg: "You sent the wrong inputs",
      })
      return;
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000'); 
} );