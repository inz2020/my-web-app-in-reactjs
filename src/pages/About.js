import React, { Component } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'my CV',
      contact: {
        name: 'ISSAKA Zeinabou',
        email: 'zeinabou@yahoo.com',
        profile: 'images/profile.jpg',
      },
      skills: [
        { id: 1, skill: 'Software Engineering' },
        { id: 2, skill: 'Data science' },
        { id: 3, skill: 'Mobile/web developer' },
        { id: 4, skill: 'UI Design' },
      ],
      skillValue: '',
    }
  }

  addSkill = (event) => {
    /*preventDefault va empecher que l'evenement se propage lorsqu'on fait un submit de sorte à ne pas perdre les infos.
         Puisque à chaque fois qu'on fait un submit la page est réchargée à nouveau */
    event.preventDefault()
    /* les trois points c'est pour faire une copie du tableau*/
    let skill = {
      id: [...this.state.skills].pop().id + 1,
      skill: this.state.skillValue,
    }
    this.setState({
      skills: [...this.state.skills, skill],
    })
  }

  setSkill = (event) => {
    this.setState({
      skillValue: event.target.value,
    })
  }
  removeSkill = (sk) => {
    let index = this.state.skills.indexOf(sk)
    /* Prendre la copie de la liste skills*/
    let listSkills = [...this.state.skills]
    listSkills.splice(index, 1)
    this.setState({ skills: listSkills })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header m-3">
          <strong>
            <label>{this.state.title}</label>
          </strong>
        </div>
        <div className="row p-2">
          <div className="col col-auto">
            <img
              width={100}
              src={this.state.contact.profile}
              alt="img de profil"
            />
          </div>
          <div className="col">
            <ul>
              <li className="list-group-item">{this.state.contact.name}</li>
              <li className="list-group-item">{this.state.contact.email}</li>
            </ul>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-header"> Skills: {this.state.skillValue}</div>
          <div className="card-body">
            <form onSubmit={this.addSkill}>
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="text"
                    name="skill"
                    value={this.state.skillValue}
                    placeholder="Add new skill"
                    className="p-1"
                    onChange={this.setSkill}
                  />
                </div>
                <div className="col col-auto">
                  <button type="submit" className="btn btn-success">
                    Add
                  </button>
                </div>
              </div>
            </form>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Skills</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {this.state.skills.map((sk, index) => (
                  <tr key={sk.id}>
                    <td>{sk.id}</td>
                    <td>{sk.skill}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.removeSkill(sk)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default About
