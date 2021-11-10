import React, { useState, useEffect, createRef } from 'react';
import styled from "@emotion/styled";
import { observer } from "mobx-react";
//import ReactDOM from 'react-dom';
import store from "../store";

import ItemRow from "../components/ItemRow";
import cssVars from "../cssVars";

const tableColor = '#feffe7';

const TableBase = styled.div`
	display: block;
	height: 720px;
	overflow-y:scroll;
`;

const tableTopMargin = 120;
const Table = styled.table`
	margin-top: ${tableTopMargin+"px"}; 
	margin-bottom: 650px;
	background-color: ${cssVars.tableColor};
	font-weight:bold;
	font-family: ${cssVars.fixedFont};
	width: 100%;
	color: ${cssVars.fontColor};
	border-spacing: 0;
`;
const Thead = styled.thead`
	display:none;
`;
const Tbody = styled.tbody`
	background-color: #feffe7;
	border: 1px solid red;
	font-weight:bold;
	width: 100%;;
`;

const getBase = () => document.getElementById("scrollingBase");

const CommandTable = () => {
	//let selectEl = null;
	//const base = document.getElementById("scrollingBase");
	const hilit = {
		elem: null,
		distance: 0
	}

	const [chosen, setChosen] = useState();

	const scrollTableTo = (item, ref) => {
		let el = ref.current
		//const tbod = el.parentElement;

		//move so as to only query the dom once
		const base = document.getElementById("scrollingBase");
		//const table = base.childNodes[0];
		//console.log(el, base, table, tbod);
		// let distance = el.offsetTop - tableTopMargin;
		let distance = el.offsetTop;
		console.log("offset="+el.offsetTop, "D="+distance, "old scroll="+base.scrollTop);
		
		getBase().scrollTop=distance;
		//debugger;
	};
	

	// const setScrollData = (item, ref) => {
	// 	hilit.elem = ref.current;
	// 	hilit.distance = hilit.elem.offsetTop;
	// };
	


	//getBase().scrollTop = hilit.elem.offsetTop;
	
  // useEffect(() => {

  // 	// let base = getBase();
  // 	// let offset = hilit.elem.offsetTop || 0;

  // 	// base.scrollTop = offset;
  // 	debugger;
  // 	if (!!hilit.elem) getBase().scrollTop = hilit.elem.offsetTop

  // });



	
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
		        .map((item) =>{
		        	const ref = React.createRef();
		        	return(
			          <ItemRow 
			          	active={item === chosen}
			            listItem={item} 
			            key={item.name} 
			            ref={ref}
			            onSelect={(item) => {
			            	store.setSelected(item);
			            	setChosen(item);
			            	scrollTableTo(item, ref)
			            	//hilit.elem = ref;
			            }}
			          />

		     		)}
		       	)}
		    </Tbody>
		  </Table>
	  </TableBase>
	);
};


export default observer(CommandTable);