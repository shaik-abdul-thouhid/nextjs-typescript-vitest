import { describe, it, expect, afterEach, beforeEach, beforeAll, afterAll, } from "vitest";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import Home from "../app/page";
import { server } from "../mocks/server";

describe("Home Page", (_) => {
	beforeEach(() => {
		render(<Home />);
	});
	
	describe("Render main page", async (_) => {
		
		afterEach(cleanup);
	
		it("", async (_) => {
			expect(screen.getByText("Home Page")).toBeInTheDocument();
		});
	
		it("should have button with text Click Me", async (_) => {
			expect(screen.getByRole("button", { name: "Click Me" })).toBeInTheDocument();
		});
	
		it("should have input with label Enter Random Text", async (_) => {
			expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
		});
	
		it("should not find element with text: This is the text!", async (_) => {
			expect(screen.queryByText("This is a text")).not.toBeInTheDocument();
		});
	});

	describe("Behavior", async (_) => {
		it("should click on show Text button and show text", async (_) => {
			expect(screen.queryByText("This is a text")).not.toBeInTheDocument();
			
			const showTextButton = screen.getByRole("button", { name: "Show Text" });

			await userEvent.click(showTextButton);

			await waitFor(async () => {
				await screen.findByText("This is a text", {});
			}, { timeout: 5000 });

			expect(await screen.findByText("This is a text", {}, { timeout: 5000 })).toBeInTheDocument();

		});
	});
	
});

