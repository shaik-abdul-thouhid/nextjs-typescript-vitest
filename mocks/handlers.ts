import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("/api/users", ({ request, }) => {
		return HttpResponse.json([
			{ id: 1, username: "Thouhid" },
		]);
	}),
	http.post("/api/auth", async ({ request, }) => {
		return HttpResponse.json({ status: 201, });
	}),
];
