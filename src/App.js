
import React from 'react';
import PropTypes from "prop-types";

import './App.css';
import styled from "@emotion/styled";
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
const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;
const ItemTitle = styled.h1`
  margin: 0;
  font-size: x-large;
`;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      filter:"",
      list: [],
      selectedItem: null,
    }
  }

  componentDidMount(){
    fetch("/list.json")
      .then(resp => resp.json())
      .then((data) => 
        this.setState({
          ...this.state,
          list: data,
        })
      );
  }


  render(){
    return (
      <PageContainer>
        <Title>Linux Lexicon</Title>
        <Columns>
          <div>
            <Input
              value={this.state.filter}
              onChange={(evt)=> this.setState({
                ...this.state,
                filter: evt.target.value
              })}
            />
            <table width="100%">
              <thead>
                <th>Command</th>
                <th>Type</th>
              </thead>
              <tbody>
                {this.state.list
                  .filter((it) => it.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                  .slice(0, 20)
                  .map((item) =>(
                    <ItemRow 
                      listItem={item} 
                      key={item.id} 
                      onSelect={(item) => this.setState({
                        ...this.state,
                        selectedItem: item
                      })}
                    />
               ))}
              </tbody>
            </table>
          </div>
          {this.state.selectedItem && <ItemDetail {...this.state.selectedItem} />}
        </Columns>
      </PageContainer>
    );
  }
}

// function App() {
//   const [filter, filterSearch] = React.useState("");
//   const [list, listSet] = React.useState(null);
//   const [selectedItem, selectedItemSet] = React.useState(null);
  

//   return (
//     // <PageContainer>
//     //   <Title>Linux Lexicon</Title>

//     //   <Columns>

//     //     <div>
//     //       <Input
//     //         value={filter}
//     //         onChange={(evt)=> filterSearch(evt.target.value)}
//     //       />
//     //       <table width="100%">
//     //         <thead>
//     //           <th>Command</th>
//     //           <th>Type</th>
//     //         </thead>
//     //         <tbody>
//     //           {list
//     //             .filter((it) => it.name.toLowerCase().includes(filter.toLowerCase()))
//     //             .slice(0, 20)
//     //             .map((item) =>(
//     //               <ItemRow 
//     //                 listItem={item} 
//     //                 key={item.id} 
//     //                 onSelect={(item) => selectedItemSet(item)}
//     //               />
//     //          ))}
//     //         </tbody>
//     //       </table>
//     //     </div>
//     //     {selectedItem && <ItemDetail {...selectedItem} />}
//     //   </Columns>

//     // </PageContainer>
//   )
// }

export default App;
