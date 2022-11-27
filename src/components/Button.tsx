import * as React from "react";
import { ReactNode } from 'react';

const defaultProps = {
	buttonType: 'primary',
	type: 'button',
	isDisabled: false,
}


export interface ButtonProps {
	children: ReactNode,
	buttonType: string,
	type: "button" | "submit" | "reset",
	isDisabled: boolean; 
}

const Button = ({children, buttonType, type, isDisabled}: ButtonProps) => {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${buttonType}`}>
			{children}
		</button>
	)
}
Button.defaultProps = defaultProps; 
export default Button; 

