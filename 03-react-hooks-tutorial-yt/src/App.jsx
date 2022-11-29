import { useState, useEffect, useContext, useRef } from "react";
import './App.css';
// import KlynoCodeContext from "./main";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment" :
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {

// ------------------- 宣言 -----------------------
const [count, setCount] = useState(0);
// const klynoInfo = useContext(KlynoCodeContext);
const ref = useRef();
const [state, dispatch] = useReducer(reducer, 0);

  // ------------------- useState -----------------------
const handleClick = () => {
  setCount(count + 1);
};

  // ------------------- useEffect -----------------------
useEffect(() => {
  console.log("Hello Hooks");
  // setCount(count + 1); useEffectのコールバック関数の中ではset関数を使わない！（無限ループになる！！）
}, [count]);

// ------------------ useRef -----------------------
const handleRef = () => {
  console.log(ref.current.value);
  console.log(ref.current.offsetHeight);
};

// ------------------ useReducer -----------------------



  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

    <hr />
    <h1>useContext</h1>
    {/* <p>{klynoInfo.name}</p>
    <p>{klynoInfo.age}</p> */}

    <hr/>
    <h1>useRef</h1>
    <input type="text" ref={ref} />
    <button onClick={handleRef}>UseRef</button>

    <hr />
    <h1>useReducer</h1>
    <button onClick={() => dispatch({ type: "increment"})}> + </button>
    </div>
  );
};

export default App;
