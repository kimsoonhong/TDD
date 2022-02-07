import React, { useState } from "react";
import "./Counter.css";

function Counter() {
	const [counterValue, setCounterValue] = useState(Number(0));
	const [inputValue, setInpuValue] = useState(Number(1));

	return (
		<div>
			<h3 data-testid="heaber">my Counter</h3>
			<h2
				data-testid="counter"
				className={`${counterValue >= 100 ? "green" : ""}${
					counterValue <= -100 ? "red" : ""
				}`}
			>
				{counterValue}
			</h2>
			<button
				data-testid="subtract-btn"
				onClick={() => {
					setCounterValue(() => {
						setCounterValue(Number(counterValue) - Number(inputValue));
					});
				}}
			>
				-
			</button>
			<input
				data-testid="input"
				value={inputValue}
				type="number"
				className="text-center"
				onChange={(e) => {
					setInpuValue(e.target.value);
				}}
			/>
			<button
				data-testid="add-btn"
				onClick={() => {
					setCounterValue(() => {
						setCounterValue(Number(counterValue) + Number(inputValue));
					});
				}}
			>
				+
			</button>
			<div style={{ height: "200px" }}></div>
		</div>
	);
}

export default Counter;
