import { UserProfile } from "../components/UserProfile";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("UserProfile", (_) => {

	afterEach(cleanup);
	
	describe("Render User Profile", (_) => {
		afterEach(cleanup);
		
		it("should have text Email Verified when isEmailVerified is true", (_) => {
			render(
			<UserProfile 
					displayName="Thouhid the Developer"
					username="thouhid"
					email="email@email.com"
					isEmailVerified={true}
				/>
			);

			expect(screen.getByText("Email Verified")).toBeInTheDocument();
		});
		
		it("should have text Email Not Verified when isEmailVerified is false", (_) => {
			render(
			<UserProfile 
					displayName="Thouhid the Developer"
					username="thouhid"
					email="email@email.com"
					isEmailVerified={false}
				/>
			);

			expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();

			expect(screen.queryByText("Email Not Verified")).toBeInTheDocument();
		});
	});
	
});