import React from 'react';
import Lorem from 'react-lorem-component';
import { words } from "../Words";

export default function(props) {
    return(
        <React.Fragment>
        <div className="well output" id="mainText">
            <Lorem count={props.count} words={words}/>
        </div>
        </React.Fragment>
    )
}