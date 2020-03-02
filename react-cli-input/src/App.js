import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      info: [
        {
          id: 0,
          name: '신성철',
          phone: '010-1234-1234'
        },
        {
          id: 1,
          name: '김성철',
          phone: '010-1234-1234'
        },
        {
          id: 2,
          name: '이성철',
          phone: '010-1234-1234'
        },
      ],
      keyword: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) => {
    this.setState(({ info }) => {
      return {
        info: [...info, data]
      }
    })
    console.log(data);
  }
  handleRemove = (id) => {
    this.setState(({ info }) => {
      return {
        info: info.filter(v => v.id !== id)
      }
    })
  }
  handleUpdate = (id, data) => {
    this.setState(({ info }) => {
      return {
        info: info.map(info => info.id === id ? { ...info, ...data } : info)
      }
    })
  }
  render() {
    const { info , keyword} = this.state;
    const filteredList = info.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <>
        <div>이름과 전화번호</div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        {<PhoneList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />}
      </>
    );
  }
}

export default App;

