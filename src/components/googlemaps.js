import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const google = window.google;

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//       {console.log('tes',props)}
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.handelMarkerClick} />}
//   </GoogleMap>
// ))
// handelMarkerClick = () => {
//   this.setState({
//     isOpen: true
//   });
//   // this.showMarkerDelay();
// };
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: parseFloat(13.067439), lng: parseFloat(80.237617) }}
    >
      {console.log("isOpen", props)}
      {props.isOpen && (
        <Marker
          position={{ lat: parseFloat(13.067459), lng: parseFloat(80.2379917) }}
          onClick={props.handelMarkerClick}
        ></Marker>
      )}
      {props.isMarkerShown && (
        <Marker
          position={{ lat: parseFloat(13.067439), lng: parseFloat(80.237617) }}
          onClick={props.handelMarkerClick}
        >
          {props.isOpen && (
            <InfoWindow>
              <div
                style={{
                  backgroundColor: `yellow`,
                  opacity: 0.75,
                  padding: `12px`
                }}
              >
                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                  Chennai
                </div>
              </div>
            </InfoWindow>
          )}
        </Marker>
      )}
    </GoogleMap>
  ))
);

export default MyMapComponent;
