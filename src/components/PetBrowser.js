import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(data => {
          return (<Pet pet={data} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(data.id)}/>)
        })}
      </div>
    );
  }
}

export default PetBrowser;
