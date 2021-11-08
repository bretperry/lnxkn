import React, { useContext } from 'react';
import styled from "@emotion/styled";
import MainContext from "../MainContext";
import cssVars from "../cssVars";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
  border: none;
`;

// const FilterZone = ({filter, filterSet}) => {
// 	//const {filter, filterSet} = useContext(SelectContext);
// 	return(
// 		<Input
// 	    	type ="text"
// 	    	value={filter}
// 	    	onChange={(evt)=> filterSet(evt.target.value)}
// 		/>
// 	);
// };

const FilterZone = () => {
	const { state: {filter}, dispatch} = React.useContext(MainContext);
	return(
		<Input
	    	type ="text"
	    	value={filter}
	    	onChange={(evt)=> dispatch({
	    		type: 'SET_FILTER',
	    		payload: evt.target.value
	    	})}
		/>
	);
};

export default FilterZone;
