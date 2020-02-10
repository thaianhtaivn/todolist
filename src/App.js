import React, {Component} from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[
        {
          name: "Di hoc ve",
          level: 0
        },{
          name: "Nau com",
          level: 2
        },{
          name: "Rua chen",
          level: 1
        }
        ,{
          name: "Lam bai tap",
          level: 0
        }
      ],
      isShowForm: false,
      strSearch : ''
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleToggleCancel = this.handleToggleCancel.bind(this);
    this.handleToggleSearch = this.handleToggleSearch.bind(this);

  }
  handleToggleForm(){
    this.setState({isShowForm: !this.state.isShowForm});
  }
  handleToggleCancel(){
    this.setState({isShowForm: false});
  }
  handleToggleSearch(value){
    this.setState({strSearch: value});
  }
  render(){
    let items=[];
    let itemsOrigin = this.state.items;
    items = _.filter(itemsOrigin, (item) => {
      return _.includes(item.name.toLowerCase(), this.state.strSearch.toLowerCase());
    });
    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    if(isShowForm) {elmForm = <Form onClickCancel = {this.handleToggleCancel}/>}
    return (
      <div className = "container">
        <Title/>
        <Control
          onClickSearch={this.handleToggleSearch}
          onClickAdd={this.handleToggleForm}
          isShowForm = {isShowForm}
        />
          {elmForm}
        <List items={items}/>
      </div>

    );
  }
}
export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
