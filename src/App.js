import React, { Component } from 'react';
import './App.css';

import Countries from './components/countries';
import Search from './components/search';
import Desc from './components/description';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search : ''
    }
  }

  passedSearchValue(value){
    this.setState({ search : value }, () => console.log(this.state.search));
  }

  render() {
    return (
      <div className="App">
        <Desc />
        <Search passtomain={this.passedSearchValue.bind(this)}/>
        <Countries searchValue={this.state.search}/>
      </div>
    );
  }
}

export default App;
