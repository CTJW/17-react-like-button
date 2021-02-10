import { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState("likes");
  // useEffect(() => {
  //   // console.log("text changed", text);
  // }, [count]);
  function handleClick() {
    setCount(count++);
  }

  if (count == 0 || 1) {
    setLikes("like");
  } else {
    setLikes("likes");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
