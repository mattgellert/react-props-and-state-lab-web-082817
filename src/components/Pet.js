import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  renderButton() {
    if (this.props.isAdopted === false) {
      return <button onClick={this.handleClick.bind(this)} className="ui primary button">Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender === "male" ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}

        </div>
      </div>
    );
  }
}

export default Pet;
