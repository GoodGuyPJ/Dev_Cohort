//write basic express boilerplate code,
//with express.json() middleware

const express = require('express');
const app = express();

app.use(express.json());

//body {
  // title: string;
  // description: string;
//}

app.post("/todo", function(req, res) {
    console.log(req.body);
    
});

app.get("/todos", function(req, res) { 
    
});

app.put("/completed", function(req, res) {
    
})

app.listen(3000, () => {
    console.log('Server running on port 3000'); 
} );