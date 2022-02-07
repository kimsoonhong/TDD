import React from "react";
import Stack from "../stack";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

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

	describe("Stack Test", () => {
		let header;
		let stack;
		let push;
		let pop;
		let input;
		const alert = jest.spyOn(window, "alert");

		beforeEach(() => {
			const component = render(<Stack />);
			stack = component.getByTestId("stack");
			push = component.getByTestId("push");
			header = component.getByTestId("header");
			pop = component.getByText("pop");
			input = component.getByTestId("input");
		});

		it("최초 stack은 비어있어야 합니다.", () => {
			expect(stack.textContent).toBe("");
		});

		it("push버튼과 pop버튼은 랜딩 되어 있어야 합니다.", () => {
			expect(push.textContent).toBe("push");
			expect(pop.textContent).toBe("pop");
		});

		it("input은 내용을 입력 받고 push와 동시에 초기화 되어야 합니다.", () => {
			expect(input.value).toBe("");
			fireEvent.change(input, { target: { value: "4" } });
			expect(input.value).toBe("4");
			userEvent.click(push);
			expect(input.value).toBe("");
		});

		it("push 후 stack에 정상적으로 쌓여야 합니다.", () => {
			fireEvent.change(input, { target: { value: "1st" } });
			userEvent.click(push);
			fireEvent.change(input, { target: { value: "2nd" } });
			userEvent.click(push);
			expect(stack.textContent).toEqual("2nd1st");
			fireEvent.change(input, { target: { value: "3rd" } });
			userEvent.click(push);
			expect(stack.textContent).toContain("2nd");
			expect(stack.textContent).toBe("3rd2nd1st");
		});
		test("stack에는 5개 이상의 item을 넣을 수 없습니다..", async () => {
			fireEvent.change(input, { target: { value: "test" } });
			userEvent.click(push);
			fireEvent.change(input, { target: { value: "test" } });
			userEvent.click(push);
			fireEvent.change(input, { target: { value: "test" } });
			userEvent.click(push);
			fireEvent.change(input, { target: { value: "test" } });
			userEvent.click(push);
			expect(alert).toBeCalledTimes(0);
			fireEvent.change(input, { target: { value: "test" } });
			userEvent.click(push);
			fireEvent.change(input, { target: { value: "test" } });
			userEvent.click(push);

			expect(alert).toBeCalledTimes(1);
		});

		it("pop 후 stack에 정상적으로 제거되어야 합니다.", () => {
			fireEvent.change(input, { target: { value: "1st" } });
			userEvent.click(push);
			fireEvent.change(input, { target: { value: "2nd" } });
			userEvent.click(push);
			expect(stack.textContent).toEqual("2nd1st");
			userEvent.click(pop);
			expect(stack.textContent).toBe("1st");
			expect(stack.textContent).toContain("1st");
		});

		it("pop은 stack이 비어있으면 실행 할 수 없습니다.", () => {
			userEvent.click(pop);
			expect(alert).toBeCalledTimes(1);
		});
	});
});
