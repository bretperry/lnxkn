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

const TheDeets = () => {
  console.log("init TheDeets");

  const manZone = document.getElementById('man');
  const sel = store.selectedItem || null;

  //console.log("sel = ",sel);

  // const manUrl = !!sel ? {manUrlRoot+store.sel.name} : null;
  //console.log("manUrl = ",manUrl);
  

  const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
  };

  const getManPage = (name) => {
    let manUrl = manUrlRoot+name;
    // let rawData = getRawData(manUrl);


    let data = "icy hot is hot to trot" + name ;
    return data;
  }



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
        <div className="man"></div>
      </DeetsDiv>
    </div>
  ) : null;
};

export default observer(TheDeets);
