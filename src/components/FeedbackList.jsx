import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'; 

const propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	)
}

const FeedbackList = ({feedback, handleDelete}) => {
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

FeedbackList.propTypes = propTypes; 
export default FeedbackList; 