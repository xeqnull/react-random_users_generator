import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userList: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(users => this.setState({ userList: users.results }));
  }

  render() {
    const { userList, searchField } = this.state;
    const filteredUsers = userList.filter(user => (
        user.name.first.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
      <h1>Users Hub</h1>
        <SearchBox placeholder='search users' handleChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList users={filteredUsers}/>
      </div>
    );
  }
}

export default App;
