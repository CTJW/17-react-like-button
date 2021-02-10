import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState("likes");

  function handleClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    if (count == 1) {
      setLikes("like");
    } else {
      setLikes("likes");
    }
  }, [count]);
  return (
    <div className="App">
      <button className="likeButton" onClick={handleClick}>
        {count} {likes}
      </button>
    </div>
  );
}
export default App;
