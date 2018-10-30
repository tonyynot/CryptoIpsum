import React, { Component } from 'react';

class paraInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange = (e) => {
        console.log(e);
        this.setState({value: e.target.value}, function(){
            this.props.onChange(this.state.value);
        });
    }

    render(){
        return(
            <input type="text" value={this.state.value} className="form-control" onChange={this.onChange}/>
        )
    }
}

export default paraInput