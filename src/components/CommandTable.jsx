import React, { useContext } from 'react';
import styled from "@emotion/styled";
import MainContext from "../MainContext";
import ItemRow from "../components/ItemRow";


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


const CommandTable = () => {
	const {list, filter, selectedItemSet } = useContext(MainContext);
	return(
	  <table width="100%">
	    <thead>
	      <tr>
	        <th>Command</th>
	        <th>Type</th>
	      </tr>
	    </thead>
	    <tbody>
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
	    </tbody>
	  </table>
	);
};


export default CommandTable;