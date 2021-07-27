import React, { Component } from 'react'
import axios from 'axios'

class Gallery extends Component {
  /* Page dasn laquelle on va utiliser REST API pour afficher les photos du site Pixayby*/
  //Definir le state
  constructor(props) {
    super(props)
    this.state = {
      //hits est la liste des sites à afficher
      hits: [],
      currentPage: 1,
      //Nbre d'enregistrements par page
      pageSize: 10,
      currentKeyword: 'rouen',
    }
  }
  //Une fois que le composanyt est chargé
  componentDidMount() {
    this.getHits()
  }

  //Au chargement du composant, on affiche ces objets
  getHits() {
    let url =
      'https://pixabay.com/api/?key=21188057-c9c4d5022d25eb7c2bf09d819&q=rouen'
    axios
      .get(url)
      .then((res) => {
        console.log(res)
        this.setState({
          hits: res.data.hits,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.hits.map((hit) => (
            <div className="col-md-5">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <img src={hit.webformatURL} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery
