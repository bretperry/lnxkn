
import React from 'react';
import styled from "@emotion/styled";
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';


import './App.css';
import cssVars from "./cssVars";


// import MainContext from "./MainContext";
import ItemRow from "./components/ItemRow";
import ItemDetail from "./components/ItemDetail";
import FilterZone from "./components/FilterZone";
import CommandTable from "./components/CommandTable";


const magickReducer = (state = {
  list: [],
  filter: "",
  selectedItem: null,
}, action) => {
  switch (action.type){
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_LIST":
      return {
        ...state,
        list: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selectedItem: action.payload,
      }; 
    default:
      return state;
  }
};

const store = createStore(magickReducer);

const Title = styled.h1`
  text-align:center;
  font-family:Futura, sans serif;
  font-weight: normal;
  letter-spacing: .6rem;
`;
const Container = styled.div`
  margin: auto;
  max-width: 900px;
  padding-top: 1em;
  color:${cssVars.fontColor};
`;
const Columns = styled.div`
  display: grid;
  grid-template-columns: 33% 67%;
  grid-column-gap: 1rem;
`;

function App() {
  console.log("initializing App...");
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  
  // const [filter, filterSet] = React.useState("");
  // const [list, listSet] = React.useState(null);
  // const [selectedItem, selectedItemSet] = React.useState(null);
  
  // const [state,dispatch] = React.useReducer(magickReducer, {
  //   list: [],
  //   filter: "",
  //   selectedItem: null,
  // });

  const typeIcons = {
    networking: "&#128423;",
    disk: "&#128436;"
  }
  
  React.useEffect(()=> {
    fetch("/list.json")
      .then(resp => resp.json())
      .then((data) => 
        dispatch({
          type: 'SET_LIST',
          payload: data,
        })
      );
  }, []);

  if (!list) {
    return <div>Loading data</div>;
  }
  //console.log("state= ",state);

  // React.useEffect(()=> {
  //   fetch("/list.json")
  //     .then(resp => resp.json())
  //     .then((data) => {
  //       listSet(data);
  //       console.log("received ajax data: " + data);
  //     });
  // }, []);

  // if (!list) {
  //   return <div>Loading data</div>;
  // }

  return (
      <Container>
        <Title>Linux Lexicon</Title>
        <Columns>
          <div>
            { console.log("outputing FilterZone...")}
            <FilterZone />
            { console.log("outputing CommandTable...")}
            <CommandTable />
          </div>
          <ItemDetail />
        </Columns>
      </Container>
  );
}

export default () => <Provider store={store}><App /></Provider>;
