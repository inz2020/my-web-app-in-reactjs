import React, { Component } from 'react'
import axios from 'axios'
import HitItem from './HitItem'

class HitDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hit: null,
    }
  }

  //Au chargement du composant, on affiche ces objets
  getHits(id) {
    let url =
      'https://pixabay.com/api/?key=21188057-c9c4d5022d25eb7c2bf09d819&id=' + id

    axios
      .get(url)
      .then((res) => {
        console.log(res)

        this.setState({
          hit: res.data.hits[0],
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    //Recuperation du id transmis dans la route
    this.getHits(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        {this.state.hit !== null ? (
          <HitItem hit={this.state.hit} />
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}
export default HitDetails
