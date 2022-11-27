import {SetStateAction, useState} from 'react'; 
import Card from './Card'; 
import Button from './Button'; 
import RatingInput from './RatingInput';
import * as React from "react";


export interface FeedbackFormProps {
	handleSubmitFeedback : (text: any, rating: any) => void,
}

const FeedbackForm = ({handleSubmitFeedback} :FeedbackFormProps) => {
	const [review, setReview] = useState(''); 
	const [btnDisabled, setbtnDisabled] = useState(true); 
	const [validation, setValidation ] = useState<String | null>(null); 
	const [rating, setRating] = useState()

	const submitReview = (e: { target: { value: SetStateAction<string>; }; }) => {
		if(review.length >= 10) {
			setbtnDisabled(false);
			setValidation(null); 
		} else { 
			setValidation('Text must be at least 10 characters')
		}
		setReview(e.target.value);
	}

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault(); 
		if(!rating) {
			setValidation('Review must have a rating')
		}
		if(rating && review && review.length >= 10) {
			handleSubmitFeedback(review, rating)
			setReview('');
			setValidation(null); 
		}
		
	}

	return (
		<Card> 
			<form onSubmit={handleSubmit}> 
				<h2>How would you rate your service with us?</h2>
				<RatingInput select={(selectedRating: (prevState: undefined) => undefined) => setRating(selectedRating)}/>
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