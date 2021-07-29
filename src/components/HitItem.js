import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HitItem extends Component {
  render() {
    return (
      <div
        key={this.props.hit.id}
        className={this.props.details === false ? 'col-md-5 m-2' : 'm-2'}
      >
        <div className="card">
          <div className="card-header">
            {this.props.details === false ? this.props.hit.tags : 'Details'}|{' '}
            {this.props.details === false
              ? this.props.hit.webformatWidth
              : this.props.hit.imageWidth}
            *
            {this.props.details === false
              ? this.props.hit.webformatHeight
              : this.props.hit.imageHeight}
          </div>
          <div className="card-body">
            {this.props.details === false ? (
              <img
                className="card-img"
                src={this.props.hit.webformatURL}
                style={{ width: 400, height: 300 }}
                alt="pretty"
              />
            ) : (
              <img
                className="card-img"
                src={this.props.hit.largeImageURL}
                alt="pretty"
              />
            )}
          </div>
          {this.props.details === false ? (
            <div className="m-2">
              <Link
                className="btn btn-success"
                to={'/hitDetails/' + this.props.hit.id}
              >
                {' '}
                Hit Details
              </Link>
            </div>
          ) : (
            <div>
              <div className="row p-2">
                <div className="col-auto">
                  <img
                    src={this.props.hit.userImageURL}
                    alt="details"
                    className="img-thumbnail"
                  />
                </div>
                <div>
                  <ul className="nav nav-pills">
                    <li className="list-group-item">
                      Views:<strong>{this.props.hit.views}</strong>
                    </li>
                    <li className="list-group-item">
                      Comments:<strong>{this.props.hit.comments}</strong>
                    </li>
                    <li className="list-group-item">
                      Downloads:<strong>{this.props.hit.downloads}</strong>
                    </li>

                    <li className="list-group-item">
                      Collections:<strong>{this.props.hit.collections}</strong>
                    </li>
                    <li className="list-group-item">
                      Likes:<strong>{this.props.hit.likes}</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link className="btn btn-primary" to="/gallery">
                  Back
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HitItem
