import * as React from 'react';
import { createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Item {
  id: string;
  text: string;
  rating: number;
}

const FeedbackContext = createContext<any>({});

export const FeedbackProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchData(); 
  }, [])
  
  const fetchData = async () => {
    const response = await fetch('http://localhost:5001/feedback?_sort=is&_order=desc');
    const data = await response.json(); 
    setFeedback(data)
    setLoading(false)
}

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
        loading,
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
