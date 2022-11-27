import * as React from "react";


export interface FeedbackStatsProps {
	feedback: Array<any>

}

const FeedbackStats = ({feedback}: FeedbackStatsProps) => {
	const average = () => {
		const total = feedback.reduce((acc , curr) => acc + curr.rating, 0)
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
