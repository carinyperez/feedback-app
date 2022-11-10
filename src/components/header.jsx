
import PropTypes from 'prop-types'; 

const defaultProps = {
	text: 'Feedback App'
}

const propTypes = {
	text: PropTypes.string
}

const Header = ({text}) => {
	return (
		<header>
			<div className='container'>
				<h2 style={{color: 'white'}}>{text}</h2>
			</div>
		</header>
	)
}

export default Header; 

Header.defaultProps = defaultProps; 
Header.propTypes = propTypes; 



