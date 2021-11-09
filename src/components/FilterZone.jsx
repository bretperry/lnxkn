import React, { useContext } from 'react';
import { observer } from "mobx-react";

import store from "../store";

import styled from "@emotion/styled";

import cssVars from "../cssVars";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  margin: 40px 0 20px;
  font-size: large;
  border: none;
  top: 20px; right: 20px;
  background-color:${cssVars.fontColor};
  color:${cssVars.tableColor};
`;

const FilterZone = () => {
	return(
		<Input
	    	type ="text"
	    	value={store.filter}
	    	onChange={(evt)=> 
	    		store.setFilter(evt.target.value)
	    	}
		/>
	);
};

export default observer(FilterZone);
