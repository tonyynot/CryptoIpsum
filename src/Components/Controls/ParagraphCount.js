import React, { Component } from 'react';

class Select extends Component {
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
            <div>
                <select className="form-control" onChange={this.onChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        )
    }
}

export default Select