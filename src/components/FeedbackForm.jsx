import {useState} from 'react'; 
import Card from './Card'; 
import Button from './Button'; 

const FeedbackForm = () => {
	const [review, setReview] = useState(''); 
	const [btnDisabled, setbtnDisabled] = useState(true); 
	const [validation, setValidation] = useState(''); 

	const submitReview = (e) => {
		setReview(e.target.value);
		if(review.length >= 10) {
			setbtnDisabled(false);
			setValidation(null); 
		} else { 
			setValidation('Text must be at least 10 characters')
		}
	}

	return (
		<Card> 
			<form> 
				<h2>How would you rate your service with us?</h2>
				{/* @todo rating select component */}
				<div className='input-group'>
					<input  onChange={submitReview} type='text' placeholder='Write a review' value={review}></input>
					<Button isDisabled={btnDisabled} type='submit' buttonType='secondary' >Send</Button>
				</div>
			</form>
			{validation && <div className='validation'>{validation}</div>}
		</Card>
	)
}; 

export default FeedbackForm; 