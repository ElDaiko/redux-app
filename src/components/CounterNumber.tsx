import { useSelector } from "react-redux";
import type { RootState } from "../state/store";

const CounterNumber = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>{count}</div>;
};

export default CounterNumber;
