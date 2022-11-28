import * as React from "react";
import {useContext} from 'react'; 
import FeedbackContext from '../context/FeedbackContext';


const FeedbackStats = () => {
	const {feedback} = useContext(FeedbackContext)
	const average = () => {
		const total = feedback.reduce((acc: any , curr: { rating: any; }) => acc + curr.rating, 0)
		return total/feedback.length; 
	}		

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			{
				feedback.length ? <h4>Average rating : {average()}</h4> : null
			}
		</div>
	)
}


export default FeedbackStats; 
