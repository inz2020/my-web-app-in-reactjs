import React, { Component } from 'react'

class SearchHitForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKeyword: '',
    }
  }

  setKeyword = (e) => {
    this.setState({
      currentKeyword: e.target.value,
    })
  }
  //Fonction de recherche par ville
  doSearch = (e) => {
    e.preventDefault()
    this.props.onSearch(this.state.currentKeyword)
  }

  render() {
    return (
      <form onSubmit={this.doSearch}>
        {/* <div>{this.state.currentKeyword}</div> */}
        <div className="row m-2 p-2">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder=" type the name of the town you want to obtain its pictures"
              value={this.state.currentKeyword}
              onChange={this.setKeyword}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success" type="submit">
              Rechercher
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchHitForm
