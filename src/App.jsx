import { useProxy } from "valtio/macro";
import { state } from "./state";

export default function App() {
  useProxy(state);
  return (
    <div>
      {state.count}
      <button onClick={() => ++state.count}>+1</button>
    </div>
  );
}
