import * as React from 'react';
const  spinner = require('../assets/spinner.gif');

const Spinner = () => {
	return (
		<img
			src={spinner}
			alt="Loading..."
			style={{width: '100px', margin: 'auto', display: 'block'}}
		/>
	)
}

export default Spinner; 