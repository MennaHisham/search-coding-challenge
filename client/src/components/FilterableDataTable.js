import React, { Component } from "react";
import Navbar from "./Navbar";
import DataTable from "./DataTable";
import Footer from "./Footer";

export default class FilterableDataTable extends Component {
  state = {
    data: this.props.data,
    search: ""
  };

  updateSearchText = text => {
    this.setState({ search: text }, () => {
      this.setState({
        data: this.props.data.filter(data => {
          return data.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());
        })
      });
    });
  };
  //prettier-ignore
  handleChange = e => {
    let sorted;
    if (e.target.value === "price") {
      sorted = [...this.state.data].sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });
    } else if(e.target.value === "age")  {
      sorted=[...this.state.data].sort((a, b) => {
        return a.age - b.age;
      });
    }
    this.setState({
      data: sorted
    });
  };

  render() {
    return (
      <>
        <Navbar
          search={this.state.search}
          updateSearchText={this.updateSearchText}
          handleChange={this.handleChange}
        />
        <DataTable data={this.state.data} />
        <Footer />
      </>
    );
  }
}
