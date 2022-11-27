import Card from './Card'; 
import {FaTimes} from 'react-icons/fa'; 
import * as React from "react";

export interface FeedbackItemProps {
	item: {
		id: any, 
		rating: number, 
		text: string
	}
	handleDelete: (id: any) => void,
}

const FeedbackItem = ({item, handleDelete}: FeedbackItemProps) => {
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='#FF0000'/>
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}



export default FeedbackItem; 