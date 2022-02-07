import React from "react";
import Counter from "../Counter";
import Stack from "../stack";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("Counter test", () => {
	let getByTestId;
	let headerEl;
	let counterEl;
	let inputEl;
	let addbtnEl;
	let subtractbtnEl;

	beforeEach(() => {
		const component = render(<Counter />);
		getByTestId = component.getByTestId;
		headerEl = getByTestId("heaber");
		counterEl = getByTestId("counter");
		inputEl = getByTestId("input");
		addbtnEl = getByTestId("add-btn");
		subtractbtnEl = getByTestId("subtract-btn");
	});

	afterEach(() => {
		cleanup();
	});

	it("input의 값은 임의로 바꿀 수 있어야 합니다.", () => {
		expect(inputEl.value).toBe("1");
		fireEvent.change(inputEl, {
			target: {
				value: 5,
			},
		});
		expect(inputEl.value).toBe("5");
	});

	it("input에 입력된 숫자만큼 counter에 추가되어집니다.", () => {
		fireEvent.click(addbtnEl);
		expect(counterEl.textContent).toBe("1");
		fireEvent.click(addbtnEl);
		expect(counterEl.textContent).toBe("2");
		fireEvent.change(inputEl, {
			target: {
				value: 5,
			},
		});
		fireEvent.click(addbtnEl);
		expect(counterEl.textContent).toBe("7");
	});

	it("input에 입력된 숫자만큼 counter에 차감되어집니다.", () => {
		userEvent.click(subtractbtnEl);
		expect(counterEl.textContent).toBe("-1");
		userEvent.click(subtractbtnEl);
		expect(counterEl.textContent).toBe("-2");
		userEvent.click(subtractbtnEl);
		expect(counterEl.textContent).toBe("-3");
		fireEvent.click(addbtnEl);
		expect(counterEl.textContent).toBe("-2");
		fireEvent.change(inputEl, {
			target: {
				value: 5,
			},
		});
		fireEvent.click(subtractbtnEl);
		expect(counterEl.textContent).toBe("-7");
		fireEvent.click(subtractbtnEl);
		expect(counterEl.textContent).toBe("-12");
	});

	it("counter 가 100이 넘으면 초록색, -100보다 작아지면 빨간색으로 변해야 합니다.", () => {
		expect(counterEl.className).toBe("");
		fireEvent.change(inputEl, { target: { value: 51 } });
		fireEvent.click(addbtnEl);
		fireEvent.click(addbtnEl);
		expect(counterEl.textContent).toBe("102");
		expect(counterEl.className).toBe("green");
		fireEvent.click(subtractbtnEl);
		expect(counterEl.className).toBe("");
		fireEvent.click(subtractbtnEl);
		fireEvent.click(subtractbtnEl);
		fireEvent.click(subtractbtnEl);
		expect(counterEl.textContent).toBe("-102");
		expect(counterEl.className).toBe("red");
		fireEvent.click(addbtnEl);
		expect(counterEl.className).toBe("");
	});
});

describe("Stack Test", () => {
	describe("일반사항", () => {
		let warpper;

		beforeEach(() => {
			warpper = render(<Stack />);
		});

		it("랜딩이되는가?", () => {
			expect(warpper).not.toBeNull();
		});

		it("랜딩된 페이지의 요소를 들고 오는가? ", () => {
			const linkElement = screen.getByText(/Stack/i);
			expect(linkElement).toBeInTheDocument();
		});
	});
});
