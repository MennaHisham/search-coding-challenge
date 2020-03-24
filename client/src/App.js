import React, { Component } from "react";
import "./style.css";
import FilterableDataTable from "./components/FilterableDataTable";
import axios from "axios";

export default class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("/api/data").then(res => {
      this.setState({
        data: res.data
      });
    });
  }
  render() {
    if (this.state.data.length !== 0) {
      return <FilterableDataTable data={this.state.data} />;
    } else {
      return "Loading";
    }
  }
}
