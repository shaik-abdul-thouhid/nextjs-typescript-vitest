import { LoginForm } from "../components/LoginForm";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

describe("LoginForm", (_) => {

	beforeEach(() => {
		render(<LoginForm />)
	});

	afterEach( cleanup);
	
	it("should enter username and password and click on login button", async (_) => {

		const loginButton = screen.getByRole<HTMLButtonElement>("button", { name: "Login" });

		expect(loginButton).toBeDisabled();
		
		const userNameRef = screen.getByLabelText<HTMLInputElement>(/Username/);
		const passwordRef = screen.getByLabelText<HTMLInputElement>(/Password/);
		
		await userEvent.type(userNameRef, "thouhid");
		await userEvent.type(passwordRef, "password");
		
		expect(loginButton).toBeEnabled();

		await userEvent.click(loginButton);

		waitFor(async () => {
			expect(await screen.findByText("Success Logging In")).toBeInTheDocument();
		}, { timeout: 3000, });
	});
	
	it("should login and display error message", async (_) => {
		server.use(
			http.post("/api/auth", ({request, }) => {
				return HttpResponse.json({}, { status: 400 });
			})
		);
		
		const loginButton = screen.getByRole<HTMLButtonElement>("button", { name: "Login" });

		expect(loginButton).toBeDisabled();
		
		const userNameRef = screen.getByLabelText<HTMLInputElement>(/Username/);
		const passwordRef = screen.getByLabelText<HTMLInputElement>(/Password/);
		
		await userEvent.type(userNameRef, "thouhid");
		await userEvent.type(passwordRef, "password");
		
		expect(loginButton).toBeEnabled();

		await userEvent.click(loginButton);

		waitFor(async () => {
			expect(await screen.findByText("Error Logging In")).toBeInTheDocument();
		}, { timeout: 3000, });
	});
});