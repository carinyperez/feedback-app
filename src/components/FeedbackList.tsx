import FeedbackItem from './FeedbackItem';
import * as React from "react";

export interface Item {
	id :string, 
	text : number, 
	rating :string,
}

export interface FeedbackListProps { 
	feedback: any[],
	handleDelete: (id: any) => void,
}

const FeedbackList = ({feedback, handleDelete}: FeedbackListProps) => {
	return (
		(!feedback || feedback.length === 0) ? <p>No feedback</p> : 
		<div>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
				)
		    )}
		</div>
	)
}

export default FeedbackList; 