import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Gallery} from './Gallery';
import {NoMatch} from './NoMatch';
import {NavBar} from './components/NavBar';


class  App extends Component {
  render(){
    return (
      <React.Fragment>
      <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route component={NoMatch} />
          </Switch>
        </Router>


      </React.Fragment>
    );
  }
  }


export default App;
