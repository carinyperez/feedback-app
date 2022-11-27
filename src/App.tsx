import Header from "./components/Header"; 
import FeedbackList from './components/FeedbackList';
import {useState} from 'react'; 
import FeedbackData from './data/FeedbackData'; 
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'; 
import * as React from 'react';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import AboutIconLink from './components/AboutIcon';


export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	const handleDelete = (id: string) => {
		window.confirm('Are you sure you want to delete') && setFeedback(feedback.filter(item => item.id !== id))
	}

	const handleSubmitFeedback = (text :string, rating: number) => {
		const newFeedback = {
			id: uuidv4(),
			rating,
			text, 
		}
		setFeedback([newFeedback, ...feedback])
	}

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes >
					<Route path ='/' element = {
						<>
						<FeedbackForm handleSubmitFeedback={handleSubmitFeedback}/>
						<FeedbackStats feedback={feedback}/>
						<FeedbackList feedback={feedback} handleDelete={handleDelete}/>
						<AboutIconLink/>
						</>
					}>
					</Route>
				<Route path='/about' element={
				<AboutPage/>}/>
				</Routes>
			</div>			
		</Router>
	)
}