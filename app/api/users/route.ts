import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

	return NextResponse.json([
		{ id: 1, username: "user1", },
		{ id: 2, username: "user2", },
		{ id: 3, username: "user3", },
	]);
}