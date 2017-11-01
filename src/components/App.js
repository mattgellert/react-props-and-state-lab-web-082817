import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import {getAll, getByType, getBetweenAge} from '../data/pets';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: getAll(),
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType(newType) {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  onFindPetsClick() {
    const type = this.state.filters.type
    let query;
    if (type === 'all') {
      query = ''
    } else if (type === 'cat') {
      query = '?type=cat'
    } else if (type === 'dog') {
      query = '?type=dog'
    } else if (type === 'micropig') {
      query = '?type=micropig'
    }

    fetch(`/api/pets${query}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pets: this.state.pets.concat(json)
        })
      })
  }

  onAdoptPet(petId) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat(petId)
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType.bind(this)} onFindPetsClick={this.onFindPetsClick.bind(this)} filters={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet.bind(this)} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
