import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/serch-box/search-box';

class App extends Component {

  state = {
    monsters: [],
    searchFild: ''
  }

  componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response => response.json())
	    .then(users => this.setState({monsters: users}));
  }

  inputHandler = (event) => {
    this.setState({searchFild: event.target.value})
    console.log(this.state)
  }
  

  render() {
    const {monsters, searchFild} = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchFild.toLowerCase())
    ))

  return (
    <div className="App">
      <h1>Monsters</h1>
      <SearchBox placeholder='search monster' inputHandler={this.inputHandler}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
