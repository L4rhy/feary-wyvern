import styled from "styled-components";

export const Container = styled.div`
	width: 30%;
	height: 60%;
	position: absolute;
	top: 20%;
	right: 5%;
	border: 2px solid white;
	border-radius: 1.25rem;
	background: ${(props) => props.theme.ROXO["600"]};
`;
export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const Title = styled.h1`
	font-size: larger;
	color: white;
	padding: 2%;
`
export const Text = styled.label`
	font-size: medium;
	color: gray;
	padding: 0.5%;
`
export const Input = styled.input`
  width: 80%;
  height: 10%;
	margin: 2.5%;
  background-color: ${props=>props.theme.ROXO["300"]};
  border-radius: 30px;
  border: 2px solid white;
	padding:1%;
  outline: none;
  color: white;
  font-size: medium;
	&:focus{
			border: 2px solid ${props=>props.theme.ROXO["900"]};
	}
`
export const Submit = styled.button`
  margin: 4%;
  padding: 4% 8%;
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
