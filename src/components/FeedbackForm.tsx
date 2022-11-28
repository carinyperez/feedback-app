import { SetStateAction, useState } from 'react';
import Card from './Card';
import Button from './Button';
import RatingInput from './RatingInput';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { handleSubmitFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [review, setReview] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [validation, setValidation] = useState<String | null>(null);
  const [rating, setRating] = useState();

  useEffect(() => {
    if (feedbackEdit.edit) {
      setbtnDisabled(false);
      setReview(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const submitReview = (e: { target: { value: SetStateAction<string> } }) => {
    if (review.length >= 10) {
      setbtnDisabled(false);
      setValidation(null);
    } else {
      setValidation('Text must be at least 10 characters');
    }
    setReview(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const updatedItem = {
      review,
      rating,
    };
    if (!rating) {
      setValidation('Review must have a rating');
    }
    if (rating && review && review.length >= 10) {
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, updatedItem);
      } else {
        handleSubmitFeedback(review, rating);
      }
      setReview('');
      setValidation(null);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingInput
          select={(rating: (prevState: undefined) => undefined) =>
            setRating(rating)
          }
        />
        <div className='input-group'>
          <input
            onChange={submitReview}
            type='text'
            placeholder='Write a review'
            value={review}
          ></input>
          <Button isDisabled={btnDisabled} type='submit' buttonType='secondary'>
            Send
          </Button>
        </div>
      </form>
      {validation && <div className='validation'>{validation}</div>}
    </Card>
  );
};

export default FeedbackForm;
