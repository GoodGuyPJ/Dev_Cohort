import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100devs.com/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json);
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
  <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
  </div>;
}

export default App;

/* 
  // import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { Children } from "react";

// function App() {
//   return (
//     <div>
//       {/* <CardWapper innerComponent={<TextComponent />} /> <br />
//       <CardWapper innerComponent={<TextComponent2 />} /> }
//       <CardWapper>hi there</CardWapper>
//     </div>
//   );
// }

// function TextComponent() {
//   return <div>hi there</div>;
// }
// function TextComponent2() {
//   return <div> no hi there</div>;
// }

// function CardWapper({ children }) {
//   return (
//     <div style={{ border: "2px solid red", padding: 20 }}>
//       {/* {innerComponent} }
//       {/* {props.innerComponent()}  }
//       {children}
//     </div>
//   );
// }

// export default App;


// */
