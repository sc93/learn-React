import React, { Component } from 'react';

class PhoneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
        }
    }
    handleChange = (e) => {
        const v = e.target.value;
        const k = e.target.name;
        this.setState({
            [k]: v
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;