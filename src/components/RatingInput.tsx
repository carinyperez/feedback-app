import * as React from "react";
import {useState} from 'react'; 

export interface RatingInputProps {
	select: any,
}

const RatingInput = ({select}: RatingInputProps) => {   
	const [selectedRating, setSelectedRating] = useState<Number | undefined>(undefined); 

	const handleChange = (e: { currentTarget: { value: any; }; }) => {
		setSelectedRating(Number(e.currentTarget.value))
		select(Number(e.currentTarget.value))
	}

	return (
		<ul className='rating'>
			{
				Array.apply(null, {length: 10}).map((el :any, i: any)=>(
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