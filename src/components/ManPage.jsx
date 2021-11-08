import React from 'react';
//import { Provider, useSelector, useDispatch } from 'react-redux';
// import useStore from "../store";
import styled from "@emotion/styled";
// import MainContext from "../MainContext";

import { observer } from "mobx-react";

import store from "../store";
import cssVars from "../cssVars";

        const manUrlRoot = "https://man.cx/";

class ManPage extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      dataFetched: false,
      data: {}
    };
  }
  
  componentDidMount() {
    fetch("https://ss64.com/bash/dd.html")
      .then(
        (response) => {
          this.setState({
            dataFetched: true,
            data: response
          });
        },
        (error) => {
          this.setState({
            dataFetched: true,
            error
          });
        }
      )
  }
  
  render() {
    const { error, dataFetched, data } = this.state;
    //alert(this.state, data);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!dataFetched) {
      return <div>Loading...</div>;
    } else {
        console.log(data);
        debugger;
      return (
        <div>GOOD</div>
      );
    }
  }
}

export default ManPage;
 