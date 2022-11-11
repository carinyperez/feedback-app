import PropTypes from 'prop-types'; 


const propTypes = {
	feedback: PropTypes.array.isRequired
}

const FeedbackStats = ({feedback}) => {

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

FeedbackStats.propTypes = propTypes; 

export default FeedbackStats; 
