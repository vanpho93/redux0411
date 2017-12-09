import React, { Component } from 'react';
import { connect } from 'react-redux';

class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch({ type: 'ADD', addition: 1 })}>
                    Add
                </button>
                <button onClick={() => this.props.dispatch({ type: 'ADD', addition: 2 })}>
                    Add 2
                </button>
                <button onClick={() => this.props.dispatch({ type: 'ADD', addition: 3 })}>
                    Add 3
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
