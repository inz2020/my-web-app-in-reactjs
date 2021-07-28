import React, { Component } from 'react'

class HitItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div key={this.props.hit.id} className="col-md-5 ">
        <div className="card">
          <div className="card-header">
            {this.props.hit.tags} | {this.props.hit.webformatWidth}*
            {this.props.hit.webformatHeight}
          </div>
          <div className="card-body">
            <img
              className="card-img"
              src={this.props.hit.webformatURL}
              style={{ width: 400, height: 300 }}
              alt="pretty"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HitItem
