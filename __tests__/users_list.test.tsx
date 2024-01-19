import { render, screen, waitFor, } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UsersList } from "../components/UserList";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

describe("Users List Component", (_) => {

	it("should have the text Thouhid", async (_) => {
		render(<UsersList />);

		expect(screen.queryByText("No Users")).toBeInTheDocument();

		waitFor(() => {
			expect(screen.findByText("Thouhid")).toBeInTheDocument();
		}, { timeout: 1000 });
	});

	it("should have username mike rendered", async (_) => {
		server.use(
			http.get("/api/users", ({ request, }) => {
				return HttpResponse.json([
					{ id: 1, username: "Thouhid" },
					{ id: 2, username: "mike" },
				]);
			}),
		);
		
		render(<UsersList />);

		waitFor(() => {
			expect(screen.findByText("mike")).toBeInTheDocument();
		}, { timeout: 1000 });
	});
});