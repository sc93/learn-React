import React, { Component } from 'react';
import Counter from './Counter';
class MyName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '신성철',
        }
    }
    render() {
        const { name } = this.state;
        const { sex } = this.props;
        return (
            <>
                <div>안녕하세요. 전 {sex}이고 이름은 {name} 입니다. </div>
                <Counter />
            </>
        );
    }
}

export default MyName;