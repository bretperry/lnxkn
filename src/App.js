
import React from 'react';
import PropTypes from "prop-types";

import './App.css';
//import list from "./list.json";


const ItemRow = ({ listItem, onSelect }) => (
          <tr key={listItem.id} onClick={()=> onSelect(listItem)}>
            <td>{listItem.name}</td>
            <td>{listItem.type.join(", ")}</td>
{/*            <td>
              <button onClick={()=> onSelect(listItem)}>Select!</button>
            </td>*/}
          </tr>

);        

ItemRow.propTypes = {
  listItem: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string)
  }),
}

const ItemDetail = ({name, alias, motto, type, content, stats}) => (
  <div>
    <h1>{name}</h1>
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


function App() {
  const [searchState, filterSearch] = React.useState("");
  const [list, listSet] = React.useState(null);
  const [selectedItem, selectedItemSet] = React.useState(null);
  
  React.useEffect(()=> {
    fetch("/list.json")
      .then(resp => resp.json())
      .then((data) => {
        listSet(data);
        console.log(data);
      });
  }, []);

  if (!list) {
    return <div>Loading data</div>;
  }

  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Linux Lexicon</h1>
      <input
        value={searchState}
        onChange={(evt)=> filterSearch(evt.target.value)}
      />
      <div
        style={{
          display:'grid',
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <table width="100%">
            <thead>
              <th>Command</th>
              <th>Type</th>
            </thead>
            <tbody>
              {list
                .filter((it) => it.name.toLowerCase().includes(searchState.toLowerCase()))
                .slice(0, 20)
                .map((item) =>(
                  <ItemRow 
                    listItem={item} 
                    key={item.id} 
                    onSelect={(item) => selectedItemSet(item)}
                  />
             ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <ItemDetail {...selectedItem} />}
      </div>

    </div>
  );
}

export default App;
