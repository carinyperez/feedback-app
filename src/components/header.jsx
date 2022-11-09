
import PropTypes from 'prop-types'; 

const defaultProps = {
	text: 'Feedback UI'
}

const propTypes = {
	text: PropTypes.string
}

export const Header = ({text}) => {
	return (
		<header>
			<div className='container'>
				<h1>My App</h1>
				<h2>{text}</h2>
			</div>
		</header>
	)
}

Header.defaultProps = defaultProps; 
Header.propTypes = propTypes; 



