import React, { useContext } from 'react';
import { observer } from "mobx-react";

import store from "../store";

import styled from "@emotion/styled";

import cssVars from "../cssVars";

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 0.8rem;
  line-height: 60px;
  margin: 58px 0 10px;
  font-size: 28px;
  border: none;
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
