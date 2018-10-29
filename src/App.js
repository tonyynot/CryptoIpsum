import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import MyLorem from './Components/LoremText';
// import axios from 'axios';

class App extends Component {
  state= {
    paras: 4,
    html: true,
    text: ''
  }
  
  // componentDidMount(){
  //   this.getSampleText();
  // }

  // getSampleText(){
  //   axios.get('http://hipsterjesus.com/api/?paras='+this.state.paras+'&html='+this.state.html)
  //   .then((response) => {
  //     this.setState({text: response.data.text}, function(){
  //       console.log(this.state);
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
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