import React from 'react';
import styled from "@emotion/styled";
import { observer } from "mobx-react";

import ItemType from '../itemType';

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


export default observer(ItemRow);