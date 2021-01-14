import { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import imageManager from './imageManager';
import Loader from './Loader'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      meta: {}
    }
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className="App">
        <Loader />
        <div className="header-menu-bar">
          <div>
            <img src={imageManager.logo} alt="logo" />
          </div>
        </div>
        <header className="App-header">
          <div className="img" style={{backgroundImage: `url(${imageManager.header})`, backgroundPositionX: "center"}}>
          </div>
          <div className="bars">
            <span className="bar selected"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="content"></div>
        </header>
        <footer>
          
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state,
  }
}

const mapDispatchToProps = {  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
