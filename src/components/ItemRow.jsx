import React, {useRef} from 'react';
import styled from "@emotion/styled";
import cssVars from "../cssVars";

import ItemType from '../itemType';

const Row = styled.tr`

`;

const TdName = styled.td`
  width: 100%;
  font-size: large;
  padding: 0rem .8rem;
`;
const Span = styled.span`
  font-size: 10px;
  font-family: Futura, open sans;
  margin: .3rem;
  color: ${cssVars.fontColorLt};
`;
//const ItemRow = ({ active, listItem, onSelect }) => {
const ItemRow = React.forwardRef((props, ref) => {
  //console.log(props, ref);
  //debugger;

  return(
    <Row 
      ref={ref}
      className={props.active ? "command active" : "command"}
      onClick={()=>props.onSelect(props.listItem)}
    >
      <TdName>
        {props.listItem.name}
        <Span>{props.listItem.type.join(", ")}</Span>
      </TdName>
    </Row>
  )});


// const RowWithRef = React.forwardRef((props, ref )=>{
//     <Row 
//       onClick={()=>onSelect(listItem)}
//       className={active ? "command active" : "command"}
//     >
//       <TdName>
//         {listItem.name}{console.log(listItem.name)} 
//         <Span>{listItem.type.join(", ")}</Span>
//       </TdName>
//     </Row>
// });

// const ItemRow = ({ ref, active, listItem, onSelect }) => {
//   //const itemRef = useRef(null);
//   return(
//     <RowWithRef ref={ active, listItem, onSelect} />
//   );
// };

 //Original without ref...

// const ItemRow = ({ active, listItem, onSelect }) => {
//   return(
//     <Row 
//       onClick={()=>onSelect(listItem)}
//       className={active ? "command active" : "command"}
//     >
//       <TdName>
//         {listItem.name}{console.log(listItem.name)} 
//         <Span>{listItem.type.join(", ")}</Span>
//       </TdName>
//     </Row>
//   );
// };


export default ItemRow;