import { Fragment, useEffect, useState } from "react";

export const UsersList = () => {
	const [users, setUsers] = useState<{ id: number, username: string }[]>([]);
	
	useEffect(() => {
		fetch("/api/users", { method: "GET", })
			.then(res => res.json())
			.then((data: { id: number, username: string }[]) => setUsers(data))
			.catch(() => setUsers([]));
	}, []);

	return (
		<Fragment>
			{
				users.length > 0 ?
					users.map(user => (
						<div key={user.id}>
							{user.username}
						</div>
					))
				: <span>No Users</span>
			}
		</Fragment>
	);
};