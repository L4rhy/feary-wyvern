import axios from "axios";

export default async function Login(username: string, password: string) {
	await axios
		.post("http://localhost:2000/login", {
			username: username,
			password: password,
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
}
