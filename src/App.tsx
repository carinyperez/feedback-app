import Header from "./components/Header"; 
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import * as React from 'react';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import AboutIconLink from './components/AboutIcon';
import {FeedbackProvider} from './context/FeedbackContext';

export default function App() {
	return (
		<FeedbackProvider>
			<Router>
			<Header />
			<div className='container'>
				<Routes >
					<Route path ='/' element = {
						<>
						<FeedbackForm />
						<FeedbackStats />
						<FeedbackList/>
						<AboutIconLink/>
						</>
					}>
					</Route>
				<Route path='/about' element={
				<AboutPage/>}/>
				</Routes>
			</div>			
		</Router>
		</FeedbackProvider>
		
	)
}