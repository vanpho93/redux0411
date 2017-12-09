import React, { Component } from 'react';
import { connect } from 'react-redux';
import Child from './Child';

class Parent extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.value }</h3>
                <Child />
            </div>
        );
    }
}

const mapState = state => ({ value: state.value });

export default connect(mapState)(Parent);
