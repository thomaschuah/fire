import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    username:"",
    currentItem:""
  };

  changeUserName = (event) => {
    this.setState({username: event.currentTarget.value});
  };

  changeCurrentItem = (event) => {
    this.setState({currentItem: event.currentTarget.value});
  };

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="username" value={this.state.username} onChange={this.changeUserName} placeholder="What's your name?" />
                <input type="text" name="currentItem" value={this.state.currentItem} onChange={this.changeCurrentItem} placeholder="What are you bringing?" />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;