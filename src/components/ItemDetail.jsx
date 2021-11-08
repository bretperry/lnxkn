import React, { useEffect } from 'react';
//import { Provider, useSelector, useDispatch } from 'react-redux';
// import useStore from "../store";
import styled from "@emotion/styled";
// import MainContext from "../MainContext";

import { observer } from "mobx-react";

import store from "../store";
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
  // const {selectedItem} = useContext(MainContext);

  // const { state:{selectedItem} } = useContext(MainContext);

  // const { 
  //   state: {selectedItem}, 
  // } = React.useContext(MainContext);
  // const dispatch = useDispatch();
  // const list = useSelector(state => state.list);
  // const sel = useSelector(state => state.selectedItem);

  // const list = useStore(state => state.list);
  // const sel = useStore(state => state.selectedItem);



  //debugger;
  //et s = selectedItem;

  //console.log("selectedItem.name = ", selectedItem.name );

  let sel = store.selectedItem;
  return sel ? (
    <div>
      <ItemTitle>{sel.alias || 'big time linux'}</ItemTitle>
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
        <p>{sel.motto || "damn snazzy motto"}</p>
        <p>spheres: {sel.type.join(", ")}</p>
        <div>{sel.content || "notes here"}</div>
        <div>"man pages"</div>
      </DeetsDiv>
    </div>
  ) : null;
};

export default observer(ItemDetail);
