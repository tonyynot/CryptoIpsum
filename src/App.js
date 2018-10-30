import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import ParagraphCount from './Components/Controls/ParagraphCount';

class App extends Component {
  state= {
    paras: 4,
    html: true,
    text: ''
  }

  constructor(props){
    super(props);
    this.paraCount=this.paraCount.bind(this);
  }

  paraCount(x){
    this.setState({paras: x});
  }

  render() {
    return (
      <div className="App container">
      <h1>ReactJS Sample Text Generator</h1>
      <hr />
          <form className="form-inline">
          <div className="form-group">
            <label>Include HTML:</label>
            <ParagraphCount value={this.state.html} onChange={this.paraCount} />
          </div>
          <Output count={this.state.paras}/>
        </form>
      </div>
    );
  }
}

export default App;