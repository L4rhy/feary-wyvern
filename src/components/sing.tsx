import { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "@/service/login";
export default function Sing() {

	const [isChecked, setIsChecked] = useState(false);
	const { register, handleSubmit } = useForm();
	const handleOnCheck = () => {
		setIsChecked(!isChecked);
	};
	const handleSubmitLogin = (data: any) => {
		Login(data.loginUsername, data.loginPassword);
	}
	const handleSubmitRegister = (data: any) => {
		console.log(data);
	}

	return (
		<div
			className="h-4/6 w-1/4 bg-purple-700 border-2 rounded-md border-purple-900 flex flex-col"
		>
			<label>
				<input
					className="sr-only peer"
					type="checkbox"
					checked={isChecked}
					onChange={handleOnCheck}
				/>
				<div className="peer rounded-md text-4xl duration-100 after:duration-500 w-full h-14 p-1 bg-purple-600 after:content-['Entrar']  after:rounded-md after:h-12 after:w-1/2 after:bg-cyan-200 after:flex after:justify-center after:items-center  after:text-purple-700 after:font-bold peer-checked:after:translate-x-48 peer-checked:after:content-['Cadastrar']" />
			</label>
			{!isChecked &&
				<form 
					className="sing"
					onSubmit={handleSubmit(handleSubmitLogin)}
					>
					<h2
						className="text-4xl text-cyan-200"
					>Login
					</h2>
					<input
						{...register("loginUsername")}
						className="input"
						placeholder="Usuário"
						type="text"
					/>
					<input
						{...register("loginPassword")}
						className="input"
						placeholder="Senha"
						type="password"
					/>
					<button
						className="bnt"
					>
						Entrar
					</button>
				</form>}
			{isChecked &&
				<form className="sing">
					<h2
						className="text-4xl text-cyan-200"
					>Cadastro</h2>
					<input
						{...register("registerEmail")}
						className="input"
						placeholder="Email"
						type="email"
					/>
					<input
						{...register("registerUsername")}
						className="input"
						placeholder="Usuário"
						type="text"
					/>
					<button
						className="bnt"
					>
						Criar
					</button>
				</form>}
		</div>
	)
}