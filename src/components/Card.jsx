import PropTypes from 'prop-types'; 

const defaultProps = {
	reverse: false,
}

const propTypes = {
	children: PropTypes.node.isRequired,
}

const Card = ({children, reverse}) => {
	return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = defaultProps; 

Card.propTypes = propTypes; 

export default Card; 