import React, { useEffect, useContext } from 'react';
import styled from "@emotion/styled";
import MainContext from "../MainContext";
import cssVars from "../cssVars";

const manUrlRoot = "https://man.cx/";

const ItemTitle = styled.h1`
  background-color: ${cssVars.tableColor};
  padding: ${cssVars.tablePadding};
  margin: 0 0 1rem;;
  font-size: x-large;
  font-family: ${cssVars.fixedFont};
`;

const DeetsDiv = styled.div`
  background-color: ${cssVars.tableColor};
  padding: ${cssVars.tablePadding};
  font-family: ${cssVars.fixedFont};
`;

const StatsTable = styled.table`
  font-family: ${cssVars.bodyFont};
  background-color: ${cssVars.fontColorLt};
  color: ${cssVars.tableColor};
  font-size: x-small;
  padding: .7em;
  float: right;
  margin: .2rem;
`;

const ItemDetail = () => {
  console.log("init ItemDetail");
  const {selectedItem} = useContext(MainContext);

  let s = selectedItem;

  console.log("s.name is ", s );

  return s ? (
    <div>
      <ItemTitle>{s.alias || 'big time linux'}</ItemTitle>
      
      <DeetsDiv>
              {s.stats &&       
          <StatsTable>
            <tbody>
              {Object.keys(s.stats).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{s.stats[key]}</td>
                </tr>
              ))}
            </tbody>
          </StatsTable>
        }
        <p>{s.motto || "damn snazzy motto"}</p>
        <p>spheres: {s.type.join(", ")}</p>
        <div>{s.content || "notes here"}</div>
        <div>"man pages"</div>
      </DeetsDiv>
    </div>
  ) : null;
};

export default ItemDetail;
