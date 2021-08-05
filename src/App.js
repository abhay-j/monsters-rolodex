import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
const api_string = "https://jsonplaceholder.typicode.com/users";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch(api_string)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  handleSearch = (e) => {
   this.setState({searchField:e.target.value})
}  

  render() {
    const {monsters, searchField} = this.state;
   const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input type="search" placeholder='search monsters' onChange={(e)=>this.setState({searchField:e.target.value})}/> */}
        {/* <SearchBox  placeholder = "search Monsters" handleSearch={(e)=>this.setState({searchField:e.target.value})}/> */}
        <SearchBox  placeholder = "search Monsters" handleSearch={this.handleSearch}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
