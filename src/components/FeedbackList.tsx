import FeedbackItem from './FeedbackItem';
import * as React from "react";
import {useContext} from 'react'; 
import FeedbackContext from '../context/FeedbackContext';


interface Item {
	id :string, 
	text : string,
	rating : number;
}

const FeedbackList = () => {
	const {feedback} = useContext(FeedbackContext);

	return (
		(!feedback || feedback.length === 0) ? <p>No feedback</p> : 
		<div>
			{feedback.map((item: Item) => (
				<FeedbackItem key={item.id} item={item} />
				)
		    )}
		</div>
	)
}

export default FeedbackList; 