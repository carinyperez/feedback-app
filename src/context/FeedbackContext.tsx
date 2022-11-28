import * as React from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Item {
  id: string;
  text: string;
  rating: number;
}

const FeedbackContext = createContext<any>({});

export const FeedbackProvider = ({ children }: any) => {
  const [feedback, setFeedback] = useState([
    {
      id: '1',
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: '2',
      text: 'This is feedback item 2',
      rating: 9,
    },
    {
      id: '3',
      text: 'This is feedback item 3',
      rating: 7,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleDelete = (id: string) => {
    window.confirm('Are you sure you want to delete') &&
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  const updateFeedback = (id: string, updatedItem: any) => {

	const updatedItemWithId = {
		id: id,
		text: updatedItem.review,
		rating: updatedItem.rating,
	}
    setFeedback(
      feedback.map((item) =>
        (item.id === id
          ? {
              ...item,
              ...updatedItemWithId,
            }
          : item
      ))
    );
  };

  const handleEdit = (item: Item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const handleSubmitFeedback = (text: string, rating: number) => {
    const newFeedback: Item = {
      id: uuidv4(),
      rating,
      text,
    };
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleEdit,
        handleDelete,
        handleSubmitFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
