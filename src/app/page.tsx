"use client"
import { useRouter } from "next/navigation"

import Sing from "@/components/sing";

export default function Home() {

	const router = useRouter()

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
			<div className="w-screen h-full flex flex-row items-center justify-around">
			<div
					className="h-4/6 w-2/4 bg-purple-700 border-2 rounded-md border-purple-900 flex flex-col justify-center items-center"
				>
					<h3 className="text-6xl text-cyan-200">
						Bem vinde ao Feary Wyvern
					</h3>
					<p className="text-3xl text-cyan-200">
						<br/>
						em construção
					</p>
				</div>
				<Sing/>
			</div>
		</div>
	)
}