import PropTypes from 'prop-types'; 

const defaultProps = {
	buttonType: 'primary',
	type: 'button',
	isDisabled: false,
}

const propTypes = {
	children: PropTypes.node.isRequired,
	buttonType: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
}

const Button = ({children, buttonType, type, isDisabled}) => {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${buttonType}`}>
			{children}
		</button>
	)
}
Button.defaultProps = defaultProps; 
Button.propTypes = propTypes; 
export default Button; 