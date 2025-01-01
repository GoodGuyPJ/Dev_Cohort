import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/todos").then(function (res) {
  //     setTodos(res.data.todos);
  //   });
  // }, []);

  //to show id title and description using useEffect
  useEffect(() => {
    axios.get(`http://localhost:8000/todo?id=${id}`).then(function (res) {
      console.log(res.data.todo);
      setTodos(res.data.todo);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
