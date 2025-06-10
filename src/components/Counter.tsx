import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <button onClick={() => dispatch(incrementAsync(5))}>
          Increment by 5 async
        </button>

        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default Counter;
