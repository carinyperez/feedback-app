import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback}) => {

	return (
		(!feedback || feedback.length === 0) ? <p>No feedback</p> : 
		<div>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item}/>
				)
		    )}
		</div>
	)
}
export default FeedbackList; 