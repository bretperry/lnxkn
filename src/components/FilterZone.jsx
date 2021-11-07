import React, { useContext } from 'react';
import styled from "@emotion/styled";
import MainContext from "../MainContext";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
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
	const {filter, filterSet} = useContext(MainContext);
	return(
		<Input
	    	type ="text"
	    	value={filter}
	    	onChange={(evt)=> filterSet(evt.target.value)}
		/>
	);
};

export default FilterZone;
