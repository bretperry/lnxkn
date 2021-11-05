
import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import ItemType from '../itemType';



// const ItemType = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   alias: PropTypes.string.isRequired,
//   motto: PropTypes.string.isRequired,
//   type: PropTypes.arrayOf(PropTypes.string.isRequired)

// });

const ItemRow = ({ listItem, onSelect }) => (
          <tr key={listItem.id} onClick={()=>onSelect(listItem)} >
            <td>{listItem.name}</td>
            <td>{listItem.type.join(", ")}</td>
          </tr>
);


ItemRow.propTypes = {
  listItem: PropTypes.arrayOf(ItemType)
}

export default ItemRow;