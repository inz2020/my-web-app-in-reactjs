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
      currentKeyword: '',
      totalPages: 1,
      pages: [],
    }
  }
  //Une fois que le composant est chargé
  componentDidMount() {
    // this.getHits()
  }

  //Au chargement du composant, on affiche ces objets
  getHits() {
    let url =
      'https://pixabay.com/api/?key=21188057-c9c4d5022d25eb7c2bf09d819&q=' +
      this.state.currentKeyword +
      '&page=' +
      this.state.currentPage +
      '&per_page=' +
      this.state.pageSize
    axios
      .get(url)
      .then((res) => {
        console.log(res)
        //Calcul de totalPages
        let tp =
          res.data.totalHits % this.state.pageSize === 0
            ? res.data.totalHits / this.state.pageSize
            : 1 + res.data.totalHits / this.state.pageSize

        this.setState({
          hits: res.data.hits,
          totalPages: tp,
          pages: new Array(tp).fill(this.state.currentPage),
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setKeyword = (e) => {
    this.setState({
      currentKeyword: e.target.value,
    })
  }
  //Fonction de recherche par ville
  search = (e) => {
    e.preventDefault()
    this.getHits()
  }
  // Une fois que le state change , on fait appel à la fonction getHits. En effet, setState est une fonction asynchrone.
  //Donc, ici getHits n'est appelé que si setState est terminée
  gotoPage = (i) => {
    this.setState(
      {
        currentPage: i,
      },
      () => this.getHits(),
    )
    console.log(this.state.currentPage)
  }

  render() {
    return (
      <div>
        {/* Formulaire de recherche */}
        <form onSubmit={this.search}>
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
        <div className="row m-2 p-2">
          {this.state.hits.map((hit) => (
            <div key={hit.id} className="col-md-5 ">
              <div className="card">
                <div className="card-header">
                  {hit.tags} | {hit.webformatWidth}*{hit.webformatHeight}
                </div>
                <div className="card-body">
                  <img
                    className="card-img"
                    src={hit.webformatURL}
                    style={{ width: 400, height: 300 }}
                    alt="pretty"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <ul className="nav nav-pills">
            {this.state.pages.map((v, i) => (
              <li key={i.id}>
                {/* i est l'index de la page, commençant par 0 on ajoute 1. La page courante est colorée par bleu */}
                <a
                  className={
                    this.state.currentPage === i + 1 ? 'btn btn-primary' : 'btn'
                  }
                  onClick={() => this.gotoPage(i + 1)}
                >
                  {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
