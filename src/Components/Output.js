import React from 'react';
import Lorem from 'react-lorem-component';

export default function(props) {
    return(
        <React.Fragment>
        <div className="well output">
            <h1>Hiya, Twitch</h1>
            <Lorem count={props.count}/>
        </div>
        </React.Fragment>
    )
}