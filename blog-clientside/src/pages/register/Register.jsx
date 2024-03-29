// tested
import axios from 'axios';
import { useState } from 'react';
import "./register.css";

export default function Register() {
	const [username, setUsername ] = useState("");
	const [email, setEmail ] = useState("");
	const [password, setPassword ] = useState("");
	const [error, setError ] = useState(false);

	// this handleSubmit successfully allows register to go to MDB!!!
	const handleSubmit =  async (e) => {
		e.preventDefault();
		setError(false);
		try {	
			const res = await axios.post("/auth/register" , { 
			username,
			email,
			password,
			});
			res.data && window.location.replace("/login");
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="register">
			<span className="registerTitle">
				Register
			</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your username ..."
					onChange={e => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your email ..."
					onChange={e => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password"
					onChange={e => setPassword(e.target.value)}
				/>
				<button type="submit"className="registerButton">
					Register
				</button>
			</form>
			<p className="click-link">
					Already have an account?
					<a href="/login">
						Login
					</a>
				</p>
			{error && <span style={{color:"red" ,marginTop: "25px" }}>Something went wrong with this request</span>}
		</div>
	);
}