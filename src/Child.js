import React, { Component } from 'react';
import { connect } from 'react-redux';

class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch({ type: 'ADD' })}>
                    Add
                </button>
                <button onClick={() => this.props.dispatch({ type: 'SUB' })}>
                    Sub
                </button>
                <button onClick={() => this.props.dispatch({ type: 'RESET' })}>
                    Reset
                </button>
            </div>
        );
    }
}

export default connect()(Child);
