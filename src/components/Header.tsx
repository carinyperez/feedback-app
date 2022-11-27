import * as React from "react";

const defaultProps = {
	text: 'Feedback App'
}

export interface HeaderProps {
	text: string
}

const Header = ({text}: HeaderProps) => {
	return (
		<header>
			<div className='container'>
				<h2 style={{color: 'white'}}>{text}</h2>
			</div>
		</header>
	)
}

export default Header; 

Header.defaultProps = defaultProps; 




