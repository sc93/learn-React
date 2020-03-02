import React, { Component } from 'react';
class UpdateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("업데이트")
        console.log(this.state);
        console.log(prevState)
        console.log(this.props);
        console.log(prevProps);
    }
    render() {
        console.log('리렌더링')
        return (
            <div>
                {this.state.show && <h1>굿굿</h1>}
            </div>
        );
    } W
}

export default UpdateComponent;