import React from 'react';
import styled from "@emotion/styled";
//import { Provider, useSelector, useDispatch } from 'react-redux';
import { observer } from "mobx-react";

import store from "../store";

// import MainContext from "../MainContext";
import ItemRow from "../components/ItemRow";
import cssVars from "../cssVars";


// const CommandTable = ({list, filter, selectedItemSet}) =>(
//   <table width="100%">
//     <thead>
//       <tr>
//         <th>Command</th>
//         <th>Type</th>
//       </tr>
//     </thead>
//     <tbody>
//       {list
//         .filter((it) => it.name.toLowerCase().includes(filter.toLowerCase()))
//         .slice(0, 20)
//         .map((item) =>(
//           <ItemRow 
//             listItem={item} 
//             key={item.name} 
//             onSelect={(item) => selectedItemSet(item)}
//           />
//      ))}
//     </tbody>
//   </table>
// );

// export default CommandTable;

const tableColor = '#feffe7';

const Table = styled.table`
	background-color: ${cssVars.tableColor};
	border: none;
	font-weight:bold;
	font-family: ${cssVars.fixedFont};
	padding: 0.6rem;
	width: 100%;
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
	// const dispatch = useDispatch();
	// const list = useSelector(state => state.list);
	// const filter = useSelector(state => state.filter);

  // const list = useStore(state => state.list);
  // const filter = useStore(state => state.filter);
  // const setSelected = useStore(state => state.setSelected);



	// const {
	// 	state: {list, filter },
	// 	dispatch,  
	// } = React.useContext(MainContext);
	
	// const {list, filter, selectedItemSet } = useContext(MainContext);
	
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
	          <ItemRow 
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