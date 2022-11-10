
const FeedbackItem = ({key, item}) => {
	return (
		<div className='card' key={key}>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
		</div>
	)
}

export default FeedbackItem; 