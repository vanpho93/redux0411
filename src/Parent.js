import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    render() {
        return (
            <div>
                <h3>0</h3>
                <Child />
            </div>
        );
    }
}

export default Parent;
