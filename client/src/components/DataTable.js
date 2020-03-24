import React, { Component } from "react";
import DataRow from "./DataRow";

export default class DataTable extends Component {
  state = {
    number: 10
  };
  loadNext = () => {
    this.setState({
      number: this.state.number + 10
    });
  };
  render() {
    return (
      <div className="container">
        {this.props.data.slice(0, this.state.number).map(data => {
          return <DataRow key={data._id} data={data} />;
        })}
        <button className="btn btn-danger" onClick={this.loadNext}>
          Load More
        </button>
      </div>
    );
  }
}
