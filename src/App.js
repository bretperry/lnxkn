
import React from 'react';
import styled from "@emotion/styled";

import './App.css';
import cssVars from "./cssVars";

import FilterZone from "./components/FilterZone";
import CommandTable from "./components/CommandTable";
import TheDeets from "./components/TheDeets";

const typeIcons = {
    networking: "&#128423;",
    disk: "&#128436;"
}
const Title = styled.h1`
  font-family:Futura, sans serif;
  font-weight: normal;
  font-size: 62px;
  letter-spacing: 0.3rem;
`;
const Container = styled.div`
  margin: auto;
  max-width: 1000px;
  padding: 1em;
  color:${cssVars.fontColor};
  max-height: 100%;
  over-flow: hidden;
`;
const Columns = styled.div`
  display: grid;
  grid-template-columns: 38.2% 61.8%;
  grid-column-gap: 1.2rem;
`;

function App() {
  console.log("initializing App...");
  return (
      <Container>

        <Columns>
          <div>
            <FilterZone />
            <CommandTable />
          </div>
          <div>
              <Title>Linuxicon<span>~</span></Title>

              <p>A little linux lexicon<br/>Scroll the Command Wheel.</p>
              <TheDeets />
          </div>

        </Columns>
      </Container>
  );
}

export default App;
