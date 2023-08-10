import styled from "styled-components/macro"


interface ButtonProps {
  classStyle: string
}

export const View = styled.div``

export const Button = styled.button<ButtonProps>`
	font-size: 21px;
  	font-weight: 600;
	line-height: 1.5;
	letter-spacing: normal;
	text-align:center;
	color: #FFFFFF !important;
	padding: 12px 19px 12px 20px;
	border-radius: 4px;
	background-color: #355C7D;
	border-style: none !important;
	box-shadow: none;
	border: none;
	transition: all ease 300ms !important;
	&:hover {
		transform: scale(1.1);
		background-color: #355C7D !important;
		color: #FFFFFF !important;
	}
	&:focus{
		transform: scale(1);
		box-shadow: none !important;
    	background-color: #355C7D !important;
      outline: 5px auto -webkit-focus-ring-color;
	}
	&:active {
		background-color: #355C7D !important;
		box-shadow: none !important;
		transform: scale(1);
		border: none !important;
	}

	&.btn-inverse {
		color: #FFFFFF !important;
		background: #698EB2 !important;
		&:hover{
			background: #698EB2 !important;
		}
		&:focus{
			background:#698EB2 !important;
			border: none;
			transform: scale(1);
			box-shadow: none !important;
		}
		&:active {
			background-color: #698EB2 !important;
    		border: none !important;
			transform: scale(1.1);
    		box-shadow: none !important;
		}
	}
`
