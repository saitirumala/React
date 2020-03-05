import React, { Component } from "react";
import "./App.css";
import MapApp from "./maps/mapApp";
//import Reactstarp from './components/reactstrap';
import Calculator from "./components/calculator";
//import Form from './components/form';
//import MetronomeApp from './Metronome/metronomeApp';
//import AvFields from './components/avFields';
//import SearchData from './components/searchData';
//import ReactUnsplashApp from './reactunsplash/reactSplashApp';
class App extends Component {
  render() {
    return (
      <div>
        {/* <SearchData /> */}
        {/* <MetronomeApp /> */}
        {/* <Reactstarp />  */}
        <MapApp />
        <Calculator />
        {/* <Form />  */}
        {/* <AvFields /> */}
        {/* <ReactUnsplashApp /> */}
      </div>
    );
  }
}
export default App;
