import React, { Component } from 'react';

class Child extends Component {
    render() {
        const { onAdd, onSub, onReset } = this.props;
        return (
            <div>
                <button onClick={onAdd}>Add</button>
                <button onClick={onSub}>Sub</button>
                <button onClick={onReset}>Reset</button>
            </div>
        );
    }
}

export default Child;
