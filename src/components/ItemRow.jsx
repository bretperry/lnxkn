import React, { useContext } from 'react';
//import PropTypes from "prop-types";
import styled from "@emotion/styled";
//import MainContext from "../MainContext";

import ItemType from '../itemType';



// const ItemType = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   alias: PropTypes.string.isRequired,
//   motto: PropTypes.string.isRequired,
//   type: PropTypes.arrayOf(PropTypes.string.isRequired)

// });
const TdName = styled.td`
  width: 100%;
  font-size: large;
`;

const Span = styled.span`
  font-size: xx-small;
`;


const ItemRow = ({ listItem, onSelect }) => {

  return(
    <tr onClick={()=>onSelect(listItem)}>
      <TdName>
        {listItem.name}{console.log(listItem.name)} 
        <Span>{listItem.type.join(", ")}</Span>
      </TdName>
    </tr>
  );
};

// const ItemRow = ({ listItem, onSelect }) => (
//   <tr key={listItem.id} onClick={()=>onSelect(listItem)}>
//     <TdName>
//       {listItem.name}{console.log(listItem.name)} 
//       <Span>{listItem.type.join(", ")}</Span>
//     </TdName>
//   </tr>
// );

// const ItemRow = () => {
//   const {listItem, onSelect } = useContext(MainContext);
//   return (
//           <tr key={listItem.id} onClick={()=>onSelect(listItem)}>
//             <TdName>
//               {listItem.name}{console.log(listItem.name)} 
//               <Span>{listItem.type.join(", ")}</Span>
//             </TdName>
//           </tr>
//   );
// }


// ItemRow.propTypes = {
//   listItem: PropTypes.arrayOf(ItemType)
// }

export default ItemRow;