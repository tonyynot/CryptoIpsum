import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';

class App extends Component {
  state= {
    paras: 4,
    html: true,
    text: ''
  }
  
  // componentDidMount(){
  //   this.getSampleText();
  // }

  showHtml(x){
    this.setState({html: x}, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
      <h1>ReactJS Sample Text Generator</h1>
      <hr />
          <form className="form-inline">
          <div className="form-group">
            <label>Include HTML:</label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
          </div>
          <Output value={this.state.text} />
        </form>
      </div>
    );
  }
}

export default App;