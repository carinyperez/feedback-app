import {useState} from 'react'; 

const RatingInput = ({select}) => {
	const [selectedRating, setSelectedRating] = useState(); 

	const handleChange = (e) => {
		setSelectedRating(Number(e.currentTarget.value))
		select(Number(e.currentTarget.value))
	}

	return (
		<ul className='rating'>
			{
				Array.apply(null, {length: 10}).map((el, i)=>(
				<li key={i}>			
				<input
				type='radio'
				id={`num ${i + 1}`}
				name='rating'
				value={i + 1}
				onChange={handleChange}
				checked={selectedRating === (i + 1)}
				/>
				<label htmlFor={`num ${i + 1}`}>{i + 1}</label>
				</li>
				))
			}
		</ul>
	)
}

export default RatingInput; 