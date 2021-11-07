import React, { useContext } from 'react';
import styled from "@emotion/styled";
import MainContext from "../MainContext";

const ItemTitle = styled.h1`
  margin: 0;
  font-size: x-large;
`;

const ItemDetail = () => {
  console.log("init ItemDetail");
  const {selectedItem} = useContext(MainContext);
  let s = selectedItem;
  console.log("ItemDetail selectedItem = ", s );
  return s ? (
    <div>
      <ItemTitle>{s.name}</ItemTitle>
      <p>alias: {s.alias}</p>
      <p>motto: {s.motto}</p>
      <p>spheres: {s.type.join(", ")}</p>
      {s.stats &&       
        <table>
          <tbody>
            {Object.keys(s.stats).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{s.stats[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      <div>{s.content}</div>
    </div>
  ) : null;
};


// const ItemDetail = ({name, alias, motto, type, content, stats}) => {
//   return(
//     <div>
//       <ItemTitle>{name}</ItemTitle>
//       <p>alias: {alias}</p>
//       <p>motto: {motto}</p>
//       <p>spheres: {type.join(", ")}</p>
//       {stats &&       
//         <table>
//           <tbody>
//             {Object.keys(stats).map((key) => (
//               <tr key={key}>
//                 <td>{key}</td>
//                 <td>{stats[key]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       }
//       <div>{content}</div>
//     </div>
//   );
// };

export default ItemDetail;