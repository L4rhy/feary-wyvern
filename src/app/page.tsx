"use client";

import { useState } from "react";
import * as S from "../styles/homeStyle";
import Login from "./components/login";

export default function Home() {
	const [openLogin, setOpenLogin] = useState(false)
	
	const HandleOpenLogin = () =>{
		if(openLogin){
			setOpenLogin(false)
		}else{
			setOpenLogin(true)
		}
	}

  return (
		<S.ContainerFundo>
			<S.NavBar>
				<S.GroupRight>
					<S.Ancora>
						Informações
					</S.Ancora>
					<S.Ancora>
						Noticias
					</S.Ancora>
				</S.GroupRight>
				<S.GroupLeft>
					<S.Ancora>
						Cadastre-se
					</S.Ancora>
					<S.Ancora
						onClick={HandleOpenLogin}
					>
						Entre
					</S.Ancora>
				</S.GroupLeft>
			</S.NavBar>
			<S.ContainerMeio>
				{!openLogin||<Login/>}
			</S.ContainerMeio>
		</S.ContainerFundo>
  );
}
