import React from "react";
import "./Numbers.css";

const NumberButton = props => {
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className='numbers keypad' onClick={() => props.setSelectedNumber(props.button)}>
				{props.button}
			</button>
		</>
	);
};

export default NumberButton;
