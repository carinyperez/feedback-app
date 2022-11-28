import * as React from 'react';
import {createContext, useState} from 'react'; 
import {v4 as uuidv4} from 'uuid'; 

interface Item {
	id: string,
	text: string, 
	rating: number,
}


const FeedbackContext = createContext<any>({});

export const FeedbackProvider = ({children}: any) => {
	const [feedback, setFeedback] = useState([
		{
			id: '1', 
			text: 'This item is from context',
			rating: 10
		}
	])
	const handleDelete = (id: string) => {
		window.confirm('Are you sure you want to delete') && setFeedback(feedback.filter(item => item.id !== id))
	}

	const handleSubmitFeedback = (text: string, rating: number) => {
		const newFeedback: Item = {
			id: uuidv4(),
			rating,
			text, 
		}
		setFeedback([newFeedback, ...feedback])
	}
	return <FeedbackContext.Provider value={{
		feedback,
		handleDelete,
		handleSubmitFeedback, 
	}}>
		{children}
	</FeedbackContext.Provider>

}

export default FeedbackContext; 

