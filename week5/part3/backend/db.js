/*
Todo {
  title: string;
  description: string;
  completed: boolean;
  } 
*/
const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb_url');

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
}