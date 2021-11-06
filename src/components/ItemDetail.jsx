import React from 'react';
import styled from "@emotion/styled";

const ItemTitle = styled.h1`
  margin: 0;
  font-size: x-large;
`;


const ItemDetail = ({name, alias, motto, type, content, stats}) => (
  <div>
    <ItemTitle>{name}</ItemTitle>
    <p>alias: {alias}</p>
    <p>motto: {motto}</p>
    <p>spheres: {type.join(", ")}</p>
    {stats &&       
      <table>
        <tbody>
          {Object.keys(stats).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{stats[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    }
    <div>{content}</div>
  </div>
);

export default ItemDetail;