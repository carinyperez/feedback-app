import Card from './Card'; 
import {FaTimes} from 'react-icons/fa'; 
import * as React from "react";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export interface FeedbackItemProps {
	item: {
		id: string, 
		rating: number, 
		text: string
	}
}

const FeedbackItem = ({item}: FeedbackItemProps) => {
	const {handleDelete} = useContext(FeedbackContext);
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