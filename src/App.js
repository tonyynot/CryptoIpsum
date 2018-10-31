import React, { Component } from 'react';
import Output from './Components/Output';
import ParagraphCount from './Components/Controls/ParagraphCount';
import ParagraphInput from './Components/Controls/ParagraphInput';
import { FaCopy } from 'react-icons/fa';


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

  copy() {
    let el = document.getElementById('mainText'),
        ghost = document.getElementById('ghost'),
        text = el.innerText;

    // Fill the ghost element and select it for copy process
    ghost.value = text;
    ghost.select();

    // Copy selected ghost element
    document.execCommand('copy');

    // Feedback
    alert('Copied')
  }

  render() {
    return (
      <div className="App container">
      <h1>Crypto Ipsum: A text generator for blockchain nerds.</h1>
      <hr />
          <form className="form-inline">
          <div className="form-group">
            <label>Select Paragraphs:</label>
            <ParagraphInput value={3} onChange={this.paraCount} />
            <button onClick={this.copy}><FaCopy /></button>
          </div>
          <Output count={this.state.paras}/>
          <textarea id="ghost" style={{ opacity: '0' }}></textarea>
        </form>
      </div>
    );
  }
}

export default App;
