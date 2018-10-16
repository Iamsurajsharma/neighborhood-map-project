import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{lat: 28.63576,
      lng: 77.22445}}
  >
    {props.markers && props.markers.filter(marker=> marker.isVisible).map((marker,indx)=>{
     const venueInfo = props.venues.find(venue=> venue.id ===marker.id);
     return(
    <Marker key={indx} position={{  lat: marker.lat, lng: marker.lng }} onClick={()=>props.MarkerClick(marker)}>
        {marker.isOpen && venueInfo.bestPhoto &&(
        <InfoWindow>
          <React.Fragment>
          <img src={`${venueInfo.bestPhoto.prefix}55x60${venueInfo.bestPhoto.suffix}`} alt="Venue Photos"/>
          <p>{venueInfo.name}</p>
          </React.Fragment>
        </InfoWindow>)}

    </Marker>)})}
  </GoogleMap>
)) 


class MapContainer extends Component {
  render() {
    
    return (
      <div>
        <MyMapComponent
            {...this.props}
            
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDvGl2gxQejfksz54wcgHsOe438sGR4Fzc"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div id="MapContainer" />}
            mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    )
  }
}
export default MapContainer;