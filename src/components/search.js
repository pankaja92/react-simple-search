import React, { Component } from 'react';
import { Input } from 'reactstrap';

const style = {
  paddingLeft : 5,
  paddingRight : 5,
  paddingBottom : 5,
  paddingTop : 10
}

class Search extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchValue : ''
    };
  };

  changeSearch(e){
    var searchValue = e.target.value;
    this.props.passtomain(searchValue);
  }

  render(){
    return (
      <div style={style} >
        <h3> Search Here </h3>
        <Input type='text' onChange={this.changeSearch.bind(this)} placeholder='Search Here'/>
      </div>
    );
  };

}

export default Search;
