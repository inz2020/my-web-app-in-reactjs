import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
      list: [0],
    }
  }
  /* image="images/profile.jpg";*/
  compute = (op) => {
    let sign = op === '+' ? 1 : -1
    let cr = this.state.counter + sign
    if (this.state.counter === 1 && op === '-') sign = 0
    this.setState({
      counter: cr,
      list: new Array(cr).fill(0),
    })
  }

  render() {
    return (
      <div className="card m-4">
        <div className="card-header">
          <strong>
            {this.props.title ? this.props.title : 'Default title'}:{' '}
            {this.state.counter}
          </strong>
        </div>
        <div className="ml-auto">
          <button
            className={'btn btn-primary m-2'}
            onClick={() => this.compute('+')}
          >
            +
          </button>
          <button
            className={'btn btn-danger m-2'}
            onClick={() => this.compute('-')}
          >
            -
          </button>
        </div>
        <div className="card-body">
          {this.state.list.map((v, index) => (
            <span key={index}>
              <img
                width={100}
                src={this.props.image ? this.props.image : 'images/profile.jpg'}
                alt={''}
              />
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default Counter
