import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  render() {
    return (
      <div className="col-md-12">
        <input
          className="form-control"
          placeholder="Search..."
          onChange={event => this.props.onInputChange(event.target.value)} />
      </div>
    )
  }
}

export default SearchBar
