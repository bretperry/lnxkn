import React, { useEffect } from 'react';
//import { Provider, useSelector, useDispatch } from 'react-redux';
// import useStore from "../store";
import styled from "@emotion/styled";
// import MainContext from "../MainContext";

import { observer } from "mobx-react";

import store from "../store";

import ManPage from "./ManPage";
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

const TheDeets = () => {
  console.log("init TheDeets");

  const manZone = document.getElementById('man');
  const sel = store.selectedItem || null;

  return sel ? (
    <div>
      <ItemTitle>{sel.alias }</ItemTitle>
      <DeetsDiv>
              {sel.stats &&       
          <StatsTable>
            <tbody>
              {Object.keys(sel.stats).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{sel.stats[key]}</td>
                </tr>
              ))}
            </tbody>
          </StatsTable>
        }
        <p>{sel.motto }</p>
        <p>spheres: {sel.type.join(", ")}</p>
        <div>{sel.content}</div>
        <ManPage />
        <p>The end</p>
      </DeetsDiv>
    </div>
  ) : null;
};

export default observer(TheDeets);
