import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={3} />
    </div>
  );
}
// const [todos, setTodos] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8000/todos").then(function (res) {
//     setTodos(res.data.todos);
//   });
// }, []);

//to show id title and description using useEffect
function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/todo?id=` + id).then((res) => {
      console.log(res.data.todo);
      setTodo(res.data.todo);
    });
  }, []);

  return (
    <div>
      <h2>{todo.title}</h2>
      <h2>{todo.description}</h2>
    </div>
  );
}

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <h3>{description}</h3>
//     </div>
//   );
// }

export default App;

/*  
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
*/
