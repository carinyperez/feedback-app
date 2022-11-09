import React from 'react'; 
import App from './App'; 
import './index.css'; 
import {createRoot} from 'react-dom/client'; 


// React 18 syntax 
const container = document.getElementById('root'); 
const root = createRoot(container); 
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
)