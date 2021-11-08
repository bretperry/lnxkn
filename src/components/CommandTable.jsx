import React from 'react';
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import store from "../store";

import ItemRow from "../components/ItemRow";
import cssVars from "../cssVars";

const tableColor = '#feffe7';

const Table = styled.table`
	background-color: ${cssVars.tableColor};
	border: none;
	font-weight:bold;
	font-family: ${cssVars.fixedFont};
	padding: 200px 0.6rem 1rem;
	width: 100%;
	overflow-y: scroll;
`;
const Thead = styled.thead`
	display:none;
`;
const Tbody = styled.tbody`
	background-color: #feffe7;
	border: none;
	font-weight:bold;
	width: 100%;;

`;

const CommandTable = () => {
	return(
	  <Table >
	    <Thead>
	      <tr>
	        <th>Command</th>
	        <th>Type</th>
	      </tr>
	    </Thead>
	    <Tbody>
	      {store.filteredList
	        .map((item) =>(
	          <ItemRow d
	            listItem={item} 
	            key={item.name} 
	            onSelect={(item) => 
	            	store.setSelected(item)
	   			}
	          />
	     ))}
	    </Tbody>
	  </Table>
	);
};


export default observer(CommandTable);