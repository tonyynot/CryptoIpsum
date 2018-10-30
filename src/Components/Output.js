import React, { Component } from 'react';
import MyLorem from './LoremText';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    render(){
        return(
            <React.Fragment>
            <div className="well output">
                {this.props.value}
                <MyLorem count={5}/>
            </div>
            </React.Fragment>
        )
    }
}

export default Output