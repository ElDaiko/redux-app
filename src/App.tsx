import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import CounterNumber from "./components/CounterNumber";
import NavBar from "./components/navbar";

/* 
---Store
interface CounterState {
  value: number;
}

interface UserState {
  isSignedIn: boolean;
}

---Actions
const IncrementAction = {
  type: "INCREMENT",
};
const DecrementAction = {
  type: "DECREMENT",
};
const IncrementBy2 = {
  type: "INCREMENT_BY_2",
  payload: 2,
};

---Reducer
function counterReducer(state: CounterState, action: any): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "INCREMENT_BY_2":
      return { ...state, value: state.value + action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
} */

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/counterNumber" element={<CounterNumber />} />
      </Routes>
    </>
  );
}

export default App;
