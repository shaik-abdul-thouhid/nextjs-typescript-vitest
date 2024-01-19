type UserProfilePropsType = {
	displayName: string,
	username: string,
	email: string,
	isEmailVerified: boolean,
};

export const UserProfile = ({ displayName, email, isEmailVerified, username }: UserProfilePropsType) => {
	return (
		<div>
			<div>
				<span>Display Name: {displayName}</span>
			</div>
			<div>
				<span>UserName: {username}</span>
			</div>
			<div>
				<span>Email: {email}</span>
			</div>
			<div>
				Verified: <span>{ isEmailVerified ? "Email Verified": "Email Not Verified" }</span>
			</div>
		</div>
	);
};