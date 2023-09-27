import styled from "styled-components";

export const ContainerFundo = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
export const NavBar = styled.div`
	width: 100%;
	height: 12.5%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	border-bottom: 2px solid white;
	background: ${props=>props.theme.ROXO["600"]};
`
export const GroupRight = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`
export const GroupLeft = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`
export const Ancora = styled.button`
	width: auto;
	margin: 4%;
  padding: 2%;
  text-align: center;
  font-size: larger;
  letter-spacing: 2px;
  text-decoration: none;
  color: ${props=>props.theme.ROXO["900"]};
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid ${props=>props.theme.ROXO["900"]};
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 ${props=>props.theme.ROXO["900"]};
	&:hover{
			color: white;
  		box-shadow: inset 0 -100px 0 0 ${props=>props.theme.ROXO["900"]};
		}
	&:active{
			transform: scale(0.9);
		}
`
export const ContainerMeio = styled.div`
	width: 100%;
	height: 87.5%;
	background: radial-gradient(circle, 
		${props=>props.theme.ROXO["600"]} 40%,
		${props=>props.theme.ROXO["900"]} 80%);
`