import React, { useContext } from 'react';
//import { useDispatch } from 'react-redux';
import useStore from "../store";
import styled from "@emotion/styled";

//import MainContext from "../MainContext";
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
  const list = useStore(state => state.list);
  const filter = useStore(state => state.filter);
  const setFilter = useStore(state => state.setFilter);


	// const dispatch = useDispatch();
	// const filter = useSelector(state => state.filter);
	// const { state: {filter}, dispatch} = React.useContext(MainContext);
	return(
		<Input
	    	type ="text"
	    	value={filter}
	    	onChange={(evt)=> 
	    		setFilter(evt.target.value)
	    	}
		/>
	);
};

export default FilterZone;
