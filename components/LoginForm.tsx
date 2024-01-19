import { MouseEvent, useState } from "react";

export const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const isDisabled = !username || !password;

	const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		
		fetch("/api/auth", {
			method: "POST",
			body: JSON.stringify({ username: username, password: password }),
		})
		.then(res => res.json())
		.then(data => setSuccess("Success Logging In"))
		.catch(err => setError("Error Logging In"));
	};
	
	return (
		<form>
			<div>{error}</div>
			<div>{success}</div>
			<label htmlFor="username">Username:</label>
			<input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" />

			<label htmlFor="password">Password:</label>
			<input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" />

			<button disabled={isDisabled} type="button" onClick={handleLogin}>Login</button>
		</form>
	);
};