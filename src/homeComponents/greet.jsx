import React, {Component} from 'react';
import "./style.css"

class Greet extends Component {
    render() {
        return (
            <div className="greet">
                <h1 className="display-3">
                    Algo Grow
                </h1>
                <hr className="dropdown-divider"/>
                <h1 className="display-5">
                Use visual representations of algorithms to improve understanding.
                </h1>
            </div>
        );
    }
}

export default Greet;
