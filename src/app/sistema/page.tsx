"use client"
import { useRouter } from "next/navigation"

export default function Sistema(){
	const router = useRouter()

	return(
		<div className="base">
			<nav className="nav">
				<button
					className="bnt"
					onClick={() => router.push("/")}
				>
					Home
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
			<div className="w-screen h-full flex flex-row items-center justify-around">
			<div
					className="h-5/6 w-5/6 bg-purple-700 border-2 rounded-md border-purple-900 flex flex-col justify-start items-center"
				>
					<h3 className="text-6xl text-cyan-200">
						As Crônicas de Helagios
					</h3>
					<p className="text-3xl text-cyan-200">
						<br/>
						em construção
					</p>
				</div>
			</div>
		</div>
	)
}