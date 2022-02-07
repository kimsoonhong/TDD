import { useState } from "react";

const Stack = () => {
	const [stack, setStack] = useState([]);
	const [input, setInput] = useState("");

	const onclickpush = () => {
		setInput("");
		if (stack.length >= 5) {
			alert("stack의 item 갯수는 5개를 초과할 수 없습니다.");

			return;
		}

		if (input === "") {
			return;
		}
		const items = [...stack, input];
		setStack(items);
	};

	const onclickpop = () => {
		if (stack.length === 0) {
			alert("stack을 더이상 비울 수 없습니다.");
			return;
		}
		stack.pop();
		const result = stack.map((data) => data);
		setStack(result);
	};

	const onchangeinput = (e) => {
		setInput(e.target.value);
	};

	return (
		<div style={{ width: "300px" }}>
			<h3 data-testid="header">Stack</h3>
			<div data-testid="stack" style={{ width: "100%" }}>
				{stack
					.slice(0)
					.reverse()
					.map((data, index) => (
						<div
							key={index}
							style={{
								marginTop: "5px",
								border: "black 2px solid ",
								padding: "5px",
								margin: "5px",
							}}
						>
							{data}
						</div>
					))}
			</div>
			<button data-testid="push" onClick={onclickpush}>
				push
			</button>{" "}
			<input data-testid="input" onChange={onchangeinput} value={input} />
			<button data-testid="pop" onClick={onclickpop}>
				pop
			</button>
			{/* <button onClick={aa}>dd</button> */}
		</div>
	);
};
export default Stack;
