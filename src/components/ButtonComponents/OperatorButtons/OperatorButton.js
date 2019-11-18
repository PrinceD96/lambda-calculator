import React from "react";
import "./Operators.css";

const OperatorButton = props => {
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className='operators keypad' onClick={props.setSelectedOperator(props.button.char)}>
				{props.button.char}
			</button>
		</>
	);
};

export default OperatorButton;
