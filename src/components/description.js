import React, { Component } from 'react';

const style = {
  topic : {
    paddingTop : 10
  },
  info : {
    paddingBottom : 20,
    paddingLeft : 10,
    paddingRight : 10
  }
}

class Desc extends Component {
  render(){
    return (
      <div className='description'>
        <h1 style={style.topic}> React Search </h1>
        <h4 style={style.info}>
          This is a simple real-time search to practise react :)
        </h4>
      </div>
    );
  }
};

export default Desc;
