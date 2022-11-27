import React from 'react';
import { ReactNode } from 'react';

const defaultProps = {
	reverse: false,
}

export interface CardProps {
	children: ReactNode,
	reverse: boolean,
}

const Card = ({children, reverse}: CardProps) => {
	return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = defaultProps; 

export default Card; 