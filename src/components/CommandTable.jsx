import React, { useState } from 'react';
import styled from "@emotion/styled";
import { observer } from "mobx-react";

import store from "../store";

import ItemRow from "../components/ItemRow";
import cssVars from "../cssVars";

const tableColor = '#feffe7';

const TableBase = styled.div`
	display: block;
	height: 720px;
	overflow-y:scroll;
`;
const Table = styled.table`
	margin: 120px auto 650px;
	background-color: ${cssVars.tableColor};
	border: none;
	font-weight:bold;
	font-family: ${cssVars.fixedFont};
	width: 100%;
	color: ${cssVars.fontColor};
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

	const [chosen, setChosen] = useState();
	const scrollTableTo = (item) => {
		
		//move so as to only query the dom once
		const base = document.getElementById("scrollingBase");
		
		// let selectEl = ?? // just need the item's element!
		// let distance = selectEl.offsetTop - selectEl.marginTop;
		// base.scroll(distance, 0);
	};

	return(
		<TableBase id="scrollingBase">
		  <Table id="scrollingTable">
		    <Thead>
		      <tr>
		        <th>Command</th>
		        <th>Type</th>
		      </tr>
		    </Thead>
		    <Tbody>
		      {store.filteredList
		        .map((item) =>(
		          <ItemRow 
		          	active={item === chosen}
		            listItem={item} 
		            key={item.name} 
		            onSelect={(item) => {
		            	store.setSelected(item);
		            	setChosen(item);
		            	scrollTableTo(item);
		            }}
		          />
		     ))}
		    </Tbody>
		  </Table>
	  </TableBase>
	);
};


export default observer(CommandTable);