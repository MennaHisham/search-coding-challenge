import React, { Component } from "react";
import "./style.css";
import FilterableDataTable from "./components/FilterableDataTable";
import axios from "axios";

export default class App extends Component {
  state = {
    data: []
  };

  async loadData() {
    const res = await axios.get("/api/data");
    this.setState({
      data: res.data
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (this.state.data.length !== 0) {
      return <FilterableDataTable data={this.state.data} />;
    } else {
      return "Loading";
    }
  }
}
