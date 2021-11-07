
import React from 'react';
import './App.css';
import styled from "@emotion/styled";

import MainContext from "./MainContext";
import ItemRow from "./components/ItemRow";
import ItemDetail from "./components/ItemDetail";
import FilterZone from "./components/FilterZone";
import CommandTable from "./components/CommandTable";


// const ItemType = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   alias: PropTypes.string.isRequired,
//   motto: PropTypes.string.isRequired,
//   type: PropTypes.arrayOf(PropTypes.string.isRequired)

// });

// const ItemRow = ({ listItem, onSelect }) => (
//           <tr key={listItem.id} onClick={()=> onSelect(listItem)}>
//             <td>{listItem.name}</td>
//             <td>{listItem.type.join(", ")}</td>
//           </tr>
// );


// ItemRow.propTypes = {
//   listItem: PropTypes.arrayOf(ItemType)
// }

// const ItemDetail = ({name, alias, motto, type, content, stats}) => (
//   <div>
//     <ItemTitle>{name}</ItemTitle>
//     <p>alias: {alias}</p>
//     <p>motto: {motto}</p>
//     <p>spheres: {type.join(", ")}</p>
//     {stats &&       
//       <table>
//         <tbody>
//           {Object.keys(stats).map((key) => (
// {/*            <tr key={key}>
//               <td>{key}</td>
//               <td>{stats[key]}</td>
//             </tr>*/}
//           ))}
//         </tbody>
//       </table>
//     }
//     <div>{content}</div>
//   </div>
// );

const Title = styled.h1`
  text-align:center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const Columns = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1rem;
`;



function App() {

  console.log("initializing App...");
  
  const [filter, filterSet] = React.useState("");
  const [list, listSet] = React.useState(null);
  const [selectedItem, selectedItemSet] = React.useState(null);

  console.log("filter: ", filter);
  
  React.useEffect(()=> {
    fetch("/list.json")
      .then(resp => resp.json())
      .then((data) => {
        listSet(data);
        console.log("received ajax data: " + data);
      });
  }, []);

  if (!list) {
    return <div>Loading data</div>;
  }

  return (
    <MainContext.Provider
      value={{
        filter,
        list,
        filterSet,
        listSet,
        selectedItem,
        selectedItemSet,
      }}
    >
      <PageContainer>
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
      </PageContainer>
    </MainContext.Provider>
  );
}

export default App;
