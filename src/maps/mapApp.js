import React, { Component } from "react";
import ReactMaps from "./reactMaps";
import places from "./places.json";
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';

class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isMarkerShow: true,
      isOpen: false,
      places: [],
      directions:'',
      address:'',
      LatLng:'' ,
      zoom:'',
      latitude:'',
      langitude:''
    };
  }
  componentDidMount() {
    // const google =window.google
    // const DirectionsService = new google.maps.DirectionsService();
    // DirectionsService.route({
    //   origin: new google.maps.LatLng(13.0827,80.2707),
    //   destination: new google.maps.LatLng(17.3850,78.4867),
    //   travelMode: google.maps.TravelMode.DRIVING,
    // },(result, status) => {
    
    //     console.log('result',result)
    //     this.setState({
    //       directions: result,
    //     });
    
    // });
  
    this.hideInfoWindow();
  }
  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       isMarkerShow: true
  //     });
  //   }, 3000);
  // };
  hideInfoWindow = () => { 

    setTimeout(() => {
      this.setState({
        isOpen: 'false'
      });
    }, 3000);
  };
  onMarkerClick = id => {
    console.log('id',id)
    this.setState({ 
      isMarkerShow: true, isOpen: 'true' });
  };

  onCloseClick = () => {
    this.setState({
      isOpen: "false"
    });
  };
  addressChange= (address) =>{
    this.setState({
      address
    })
    
      };
      addressSelect = (address) => {
        this.setState({ address })
        geocodeByAddress(address)
            .then(result => getLatLng(result[0]))
            .then(LatLng => {
                console.log(LatLng)
                this.setState({ LatLng:LatLng,zoom:10 ,
                  latitude:parseFloat(LatLng.lat),
                  langitude:parseFloat(LatLng.lng),
                  address:address})
            })
            .catch(error => console.log('error', error));

    };
  render() {
    console.log('ramesh',this.state.directions)
    return ( 
      <div >
 <PlacesAutocomplete places={places} value={this.state.address} onChange={this.addressChange} onSelect={this.addressSelect} >
  {({getInputProps,suggestions,getSuggestionItemProps,loading})=>(
    <div>
      <label> Search the Location </label>
      <input style={{width:"250px",height:"35px"}} {...getInputProps({
        placehoder:"Enter the location",
        className:"location-search-input"
      })} ></input>
      <div className="autocomplete-dropdown-container">
        {loading && <div>Loading...</div>}
        {suggestions.map(suggestion =>{
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
        })}
      </div>
      </div>
  )}
</PlacesAutocomplete>
        <ReactMaps 
          directions={this.state.directions}
          LatLng={this.state.LatLng}
          address={this.state.address}
          //places={places}
          zoom={this.state.zoom}
          latitude={this.state.latitude}
          langitude={this.state.langitude}
          isOpen={this.state.isOpen}
          isMarkerShow={this.state.isMarkerShow}
          onMarkerClick={this.onMarkerClick}
          onCloseClick={this.onCloseClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSLDGrjkwrVhqe2zs8a7R1FfY7XRKyfBI&libraries=geometry,drawing,places&sensor=false"
          loadingElement={<div style={{ height: "100%" }}></div>}
          containerElement={<div style={{ height: "400px" }}></div>}
          mapElement={<div style={{ height: "100%" }}></div>}
          {...this.props}
        ></ReactMaps>
        {console.log("directions", this.state.directions)}
      </div>
    );
  }
}
export default MapApp;
