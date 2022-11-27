import * as React from 'react';
import {FcAbout} from 'react-icons/fc'
import {Link} from 'react-router-dom';


const AboutIconLink = () => {
	return (
		<div className='about-link'>

			<Link to='/about'><FcAbout size={50} fill={'#ff6a95'}/></Link> 
		</div>
	)
}; 

export default AboutIconLink; 
