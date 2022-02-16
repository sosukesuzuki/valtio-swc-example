import React from "react";
import { proxy, useSnapshot } from "valtio";

const state = proxy({ count: 0, text: "hello" });

export default function App() {
  const snap = useSnapshot(state);
  return (
    <div>
      {snap.count}
      <button onClick={() => ++state.count}>+1</button>
    </div>
  );
}
