"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Home() {
	const router = useRouter()
	const [isChecked, setIsChecked] = useState(false);

  const handleOnCheck = () => {
    setIsChecked(!isChecked);
  };

	return (
		<div className="base">
			<nav className="nav">
				<button
					className="bnt"
					onClick={() => router.push("/sistema")}
				>
					Sistema
				</button>
				<button
					className="bnt"
					onClick={() => router.push("/noticias")}
				>
					Noticias
				</button>
				<button
					className="bnt"
					onClick={() => router.push("/informacoes")}
				>
					Informações
				</button>
			</nav>
			<div
				className="h-4/6 w-2/4 bg-purple-300 absolute left-16 bottom-16 border-2 rounded-md border-purple-400"
			>
				<h3>
					Bem vinde ao Feary Wyvern
				</h3>
				<p>
					em construção
				</p>
			</div>
			<div 
				className="h-4/6 w-1/4 bg-purple-300 absolute right-16 bottom-16 border-2 rounded-md border-purple-400"
				>
				<label>
					<input 
					className="sr-only peer" 
					type="checkbox"
					checked={isChecked}
					onChange={handleOnCheck}
					/>
						<div className="peer rounded-md text-4xl duration-100 after:duration-500 w-full h-14 bg-purple-200 after:content-['Entrar'] after:absolute after:rounded-md after:h-12 after:w-1/2 after:bg-cyan-200 after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-purple-300 after:font-bold peer-checked:after:translate-x-40 peer-checked:after:content-['Cadastrar']"/>
				</label>
				{!isChecked && 
					<div className="login">
						<input
							className="input"
							placeholder="Usuário"
							type="text"
						/>
						<input
							className="input"
							placeholder="Senha"
							type="password"
						/>
						<button
							className="bnt"
						>
							Entrar
						</button>
					</div>}
				{isChecked &&
					<div className="login">
						<input
							className="input"
							placeholder="Email"
							type="email"
						/>
						<input
							className="input"
							placeholder="Usuário"
							type="text"
						/>
						<input
							className="input"
							placeholder="Senha"
							type="password"
						/>
						<button
							className="bnt"
						>
							Criar
						</button>
					</div>}
				</div>
			</div>
	)
}