import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  let c = "";
  for (let i = 0; i < count; i++) c += "<li> " + i + "</li>";
  return (
    <section>
      <ul>{c}</ul>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </section>
  );
};
export default Counter;
