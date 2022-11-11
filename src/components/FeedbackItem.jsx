import Card from './Card'; 
import PropTypes from 'prop-types'; 

const propTypes = {
	item: PropTypes.object.isRequired,
}

const FeedbackItem = ({item}) => {
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

FeedbackItem.propTypes = propTypes; 


export default FeedbackItem; 