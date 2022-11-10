import Header from "./components/Header"; 
import FeedbackList from './components/FeedbackList';
import {useState} from 'react'; 
import FeedbackData from './data/FeedbackData'; 


export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback}/>
			</div>
		</>
	)
}