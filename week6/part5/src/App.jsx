import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Count is {count}
      </button>
    </>
  );
}

export default App;
