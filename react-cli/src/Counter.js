import React, { Component } from 'react';
import UpdateComponent from './UpdateComponent'
const style = {
    color: 'red',
}
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            flag: false
        }
    }
    plus = () => {
        this.setState((prev) => {
            return {
                cnt: prev.cnt + 1
            }
        })
    }
    minus = () => {
        this.setState((prev) => {
            return {
                cnt: prev.cnt - 1
            }
        })
    }
    componentDidMount() {
        this.setState({
            flag: true
        })
    }
    componentDidUpdate() {
        if (this.state.cnt % 2 === 0) {
            console.log('짝');
            return {
                ... this.state,
                flag: true
            }
        } else {
            console.log('홀');
            return {
                ... this.state,
                flag: false
            }
        }
    }
    render() {
        return (
            <>
                <div>
                    <div>값 <span style={style}>{this.state.cnt}</span></div>
                    <button onClick={this.plus}>+</button>
                    <button onClick={this.minus}>-</button>
                    {this.state.flag && <div>componentDidMount </div>}
                </div>
                <UpdateComponent flag={this.state.flag} />
            </>
        );
    }
}

export default Counter;