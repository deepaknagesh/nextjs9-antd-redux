import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "antd";

import { increment, decrement, reset } from '../redux/tickers/actions'

class Counter extends Component {
    increment = () => {
        this.props.dispatch(increment())
    }

    decrement = () => {
        this.props.dispatch(decrement())
    }

    reset = () => {
        this.props.dispatch(reset())
    }

    render() {
        const { count } = this.props;
        return (
            <div>
                <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
                <h1>
                    Count: <span>{count}</span>
                </h1>
                <Button onClick={this.increment}>+1</Button>
                <Button onClick={this.decrement}>-1</Button>
                <Button onClick={this.reset}>Reset</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { TestReducer = {} } = state;
    const { count = 0 } = TestReducer;
    return {
        count
    }
}
export default connect(mapStateToProps)(Counter)