import React, { Component } from "react";
import "./App.css";
import MapApp from './maps/mapApp';
import Reactstrap from './components/reactstrap';
import Calculator from './components/calculator';
import Form from './components/form';
//import Form from './components/form';
//import MetronomeApp from './Metronome/metronomeApp';
//import AvFields from './components/avFields';
//import SearchData from './components/searchData';
//import ReactUnsplashApp from './reactunsplash/reactSplashApp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routing from './Routing'
import Nav from './components/navbar';
class App extends Component {
  render() {
      console.log(this.props)
    return (
      <div>

        {/* <Router> */}
          {/* <Nav {...this.props} /> */}
          <Nav />
          {/* <Switch> */}
            {/* <Route exact path='/' component={Reactstrap} />
            <Route exact path='/map' component={MapApp} />
            <Route exact path='/calculator' component={Calculator} />
            <Route exact path='/form' component={Form} /> */}
            {/* <Route exact path='/' component={Reactstrap} />
          <Route exact path='/' component={Reactstrap} /> */}

            {/* <Routing /> */}

          <section
          title='section1'
          id='section1'
          >
          <Reactstrap/> 
          </section>
          <section  title='section2'
          id='section2'><MapApp/></section>      
          <section  title='section3'
          id='section3'><Calculator/> </section>   
          <section  title='section4'
          id='section4'><Form/></section>   
          {/* </Switch> */}
        {/* </Router> */}
        {/* <SearchData /> */}
        {/* <MetronomeApp /> */}
        {/* <Reactstrap />  */}
        {/* <MapApp  /> */}
        {/* <Calculator />  */}
        {/* <Form />  */}
        {/* <AvFields /> */}
        {/* <ReactUnsplashApp /> */}
      </div>
    );
  }
}
export default App;
