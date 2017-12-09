import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.onAdd = this.onAdd.bind(this);
        this.onSub = this.onSub.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onAdd() {
        this.setState({ value: this.state.value + 1 });
    }

    onSub() {
        this.setState({ value: this.state.value - 1 });
    }

    onReset() {
        this.setState({ value: 0 });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>{ value }</h3>
                <Child
                    onAdd={this.onAdd}
                    onSub={this.onSub}
                    onReset={this.onReset}
                />
            </div>
        );
    }
}

export default Parent;
