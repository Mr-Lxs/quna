import React, { Component } from 'react';
import Title from "view/title";
import Hotadd from "view/hotadd";
import List from "view/list"
import Nav from "view/nav"
import Content from "view/content"
import 'common/css/bootstrap.min.css'
import 'common/css/common.css'
import 'common/css/reset.css'
import 'common/css/style.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>this is header</h2>
        </header>
        <div className="banner">
          <img src="http://source.qunarzz.com/site/images/wns/20181123_dujiashouye_2.jpg" alt=""/>
        </div>
        <Title />
        <Hotadd />
        <List/>
        <Nav/>
        <div className="gray"></div>
        <Content/>
      </div>
    );
  }
}

export default App;
