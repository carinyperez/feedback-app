import Card from './Card'; 
import PropTypes from 'prop-types'; 
import {FaTimes} from 'react-icons/fa'; 

const propTypes = {
	item: PropTypes.object.isRequired,
}

const FeedbackItem = ({item, handleDelete}) => {
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

FeedbackItem.propTypes = propTypes; 


export default FeedbackItem; 