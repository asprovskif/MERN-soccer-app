import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor() {
    super()
    this.firstNameInput  = React.createRef();
    this.lastNameInput  = React.createRef();
    this.emailInput  = React.createRef();
    this.phoneInput  = React.createRef();
  
  }
    submitPlayer(event) {
        event.preventDefault();

        axios.post('http://localhost:4000/players', {
          firstName: this.firstNameInput.current.value,
          lastName: this.lastNameInput.current.value,
            phone: this.phoneInput.current.value,
            email: this.emailInput.current.value
        })
        .then((response) => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" ref={this.firstNameInput} type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" ref={this.lastNameInput} type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="phone" ref={this.phoneInput} type="text" />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref={this.emailInput} type="text" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
