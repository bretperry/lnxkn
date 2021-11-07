import React, { useContext } from 'react';
import styled from "@emotion/styled";
import MainContext from "../MainContext";
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
	const {list, filter, selectedItemSet } = useContext(MainContext);
	return(
	  <Table >
	    <Thead>
	      <tr>
	        <th>Command</th>
	        <th>Type</th>
	      </tr>
	    </Thead>
	    <Tbody>
	      {list
	        .filter((it) => it.name.toLowerCase().includes(filter.toLowerCase()))
	        .slice(0, 20)
	        .map((item) =>(
	          <ItemRow 
	            listItem={item} 
	            key={item.name} 
	            onSelect={(item) => selectedItemSet(item)}
	          />
	     ))}
	    </Tbody>
	  </Table>
	);
};


export default CommandTable;