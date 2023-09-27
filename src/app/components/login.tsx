"use client"

import * as S from "../../styles/components/loginStyle"

export default function Login(){
	return(
		<S.Container>
			<S.Form>
				<S.Title>
					Monte seu dragão
				</S.Title>
				<S.Input
					placeholder="Nome de Usuário"
					type="text"
					required={true}
				/>
				<S.Input
					placeholder="Senha"
					type="password"
					required={true}
				/>
				<S.Submit>Entrar</S.Submit>
			</S.Form>
		</S.Container>
	)
}