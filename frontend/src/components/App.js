import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerForm from './player/PlayerForm';
import PlayerList from './player/PlayerList';
import PlayerSingle from './player/PlayerSingle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    }

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/players';

    axios.get(url)
    .then((response) => {
      this.setState({
        players: response.data,
      })
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    })
  }

  render () {
  return (
    <div className="container-fluid">
      <div className='row'>
      <nav>
    <div className="nav-wrapper blue darken-1">
      <a href="#!" className="brand-logo">Soccer managment</a>
    </div>
  </nav>
      </div>
      <div className='row'>
        <div className='col s3'><PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer}/></div>
        <div className='col s9'><PlayerSingle player={this.state.currentPlayer}/></div>
      </div>
      <div className='row'>
        <div className='col s12'><PlayerForm /></div>
      </div>
      </div>
  );
  }
}

export default App;
