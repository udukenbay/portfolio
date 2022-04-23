import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../../image/marker.png';

const AnyReactComponent = ({ text }) => <div>{text}<img src={marker} alt="logo" width="20" /></div>;

class GoogleMap extends Component {
  // static defaultProps = {
  //   center: { lat: 43.26, lng: 76.93 },
  //   zoom: 8
  // };

  constructor(props) {
    super(props)
    this.state = {
      center: { lat: 43.26, lng: 76.93 },
      zoom: 11,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 11
      }),
      err => console.log(err)
    );

    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
  }

  render() {
      return (
      // Important! Always set the container height explicitly
      <div style={{ height: '320px', width: '500px', margin: '30px 0px 0px 75px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.center}
          // defaultCenter={this.props}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;