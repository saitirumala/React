import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow,
  DirectionsRenderer,
  Circle,
  Polygon
} from "react-google-maps";
const coords = [
  {lat:12.6208,lng:80.1945},
  {lat: 12.7593,lng: 80.0033},
  {lat: 12.9625,lng: 79.9453},
  {lat: 13.1373,lng: 79.9081},
  {lat: 13.3105,lng: 80.0470},
  {lat: 13.3353,lng: 80.1443},
  {lat:13.3340,lng:80.1944},
  {lat: 13.2957,lng: 80.3380},
];
  const reversedCoords = coords.map( ll => {
    return { lat: ll.lng, lng: ll.lat }
});
const ReactMaps = withScriptjs(withGoogleMap(props => (
  <GoogleMap
  
    zoom={props.zoom ? props.zoom:4}
    //defaultCenter={new window.google.maps.LatLng(13.0827, 80.2707)}
    center={new window.google.maps.LatLng(props.LatLng.lat || 13.0827, props.LatLng.lng || 80.2707)}
  >
    <div>
      {console.log('1233', props)}
      {props.isMarkerShow && (
        <Marker
        
          onMouseOver={props.onMarkerClick}
          //onMouseOut={props.onCloseClick}
          position={{ lat: props.LatLng.lat, lng: props.LatLng.lng }}
          onClick={() => props.onMarkerClick(props.address)}
        >
          {props.isOpen === 'true' && (
            <>
              <InfoWindow
                onCloseClick={props.onCloseClick}
                options={{
                  closeBoxURL: ``,
                  enableEventPropagation: true
                }}
              >
                <div
                  style={{
                    backgroundColor: `yellow`,
                    opacity: 0.75,
                    padding: `12px`
                  }}
                >
                  <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                    {props.address}

                  </div>
                </div>
               
              </InfoWindow>

            </>
          )}




        </Marker>
      )}
      {console.log('props. zoom', props.zoom)}

      {props.directions && <DirectionsRenderer
        directions={props.directions}
      />}

      <Circle
        center={{
          lat: props.latitude,
          lng: props.langitude
        }}
        radius={15000}
        options={{
          strokeColor: "red",
          //strokeBackground:'green'
        }}
      />
       <Polygon
                  path={coords}
                  key={1}
                  options={{
                      fillColor: "red",
                      fillOpacity: 0.4,
                      strokeColor: "#000",
                      strokeOpacity: 1,
                      strokeWeight: 1
                  }}
                 />
    </div>
  </GoogleMap>
))
);
export default ReactMaps;
