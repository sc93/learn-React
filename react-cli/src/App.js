import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: '남자'
    }
  }
  render() {
    return (<>
      <div className="App">
        리액트
      </div>
      <MyName sex={this.state.sex} />
    </>);
  }
}

export default App;
