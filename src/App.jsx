import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/feature/countSlice";
import "./App.css"; // Ensure this matches your file path

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);

  const handleInputChange = (e) => {
    const val = Number(e.target.value);
    setNum(isNaN(val) ? 0 : val);
  };

  return (
    <div class="counter-container">
      <div class="counter-card">
        <h1 class="counter-display">{count}</h1>

        <div class="button-group">
          <button class="btn-decrement" onClick={() => dispatch(decrement())}>
            - Decrement
          </button>
          <button class="btn-increment" onClick={() => dispatch(increment())}>
            + Increment
          </button>
        </div>

        <div class="input-group">
          <input
            value={num}
            type="number"
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
          <button
            class="btn-amount"
            onClick={() => dispatch(incrementByAmount(num))}
          >
            Increment / Decrement By Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
