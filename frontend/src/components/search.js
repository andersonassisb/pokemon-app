import React, { Component } from "react";

class Search extends Component {
  handleSearch = e => this.props.handleChange(e);

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control text-center"
          type="text"
          placeholder="Search for Pokemon"
          autoFocus
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default Search;
