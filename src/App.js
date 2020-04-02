import React, { Component } from 'react';
import SideNav from "./components/SideNav"
import sky from "./images/tiree.png"
import ground from "./images/tireeBottom.png"
import './App.css';

class App extends Component {
  state = {
    scroll: '',
    cursorLeft: 0,
    cursorTop: 0,

    height: 0,

    home: true,
    projects: false,
    about: false,
    contact: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.handleCursor);
    window.addEventListener('resize', this.updateWindowDimensions);
    this.setState({ height: window.innerHeight });
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.handleCursor);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  }

  handleScroll = () => {
    let value = window.scrollY;
    this.setState({ scroll: value})

    const num = this.state.height * 1.15

    if(value < (num)/2){
      this.setState({home: true, about: false, projects: false, contact: false})
    }
    if(value >= (num)/2 && value < (this.state.height * 2.15)-(this.state.height/2)){
      this.setState({home: false, about: true, projects: false, contact: false})
    }
    if(value >= (this.state.height * 2.15)-(this.state.height/2) && value < (this.state.height * 3.15)-(this.state.height/2)){
      this.setState({home: false, about: false, projects: true, contact: false})
    }
    if(value >= (this.state.height * 3.15)-(this.state.height/2)){
      this.setState({home: false, about: false, projects: false, contact: true})
    }
  }

  handleCursor = (e) => {
    this.setState({cursorLeft: e.pageX, cursorTop: e.pageY})
  }

  render() {
    return (
      <div className="App">
        {/* <div className="cursor" style={{top: `${this.state.cursorTop}px`, left: `${this.state.cursorLeft}px`}}></div> */}
        <SideNav state={this.state} />
        <div id="homePage">
          <div className="mainTitle" style={{transform: `translateY(${this.state.scroll * 0.6}px)`}}>
            <h1 className="iAm">I am</h1>
            <h1 className="name">John</h1>
          </div>
          <img className="sky" src={sky} alt="sky" style={{top: `${this.state.scroll * -0.45}px`}}></img>
          <img className="ground" src={ground} alt="ground"></img>
        </div>
        <div id="aboutPage">ABOUT</div>
        <div id="projectsPage">PROJECTS</div>
        <div id="contactPage">CONTACT</div>
      </div>
    );
  }
}

export default App;
