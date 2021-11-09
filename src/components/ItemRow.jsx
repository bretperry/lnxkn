import React from 'react';
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

const ItemRow = ({ active, listItem, onSelect }) => {
  return(
    <Row 
      onClick={()=>onSelect(listItem)}
      className={active ? "command active" : "command"}
    >
      <TdName>
        {listItem.name}{console.log(listItem.name)} 
        <Span>{listItem.type.join(", ")}</Span>
      </TdName>
    </Row>
  );
};


export default ItemRow;