import FeedbackItem from './FeedbackItem';
import * as React from "react";
import {useContext} from 'react'; 
import FeedbackContext from '../context/FeedbackContext';
import Spinner from '../components/Spinner';


interface Item {
	id :string, 
	text : string,
	rating : number;
}

const FeedbackList = () => {
	const {feedback, loading} = useContext(FeedbackContext);

	if(!loading && (!feedback || feedback.length === 0)) {
		return (
			<p>No feedback yet</p>
		)
	}

	return (
		
		(loading) ? <Spinner/>: 
		<div>
			{feedback.map((item: Item) => (
				<FeedbackItem key={item.id} item={item} />
				)
		    )}
		</div>
	)
}

export default FeedbackList; 