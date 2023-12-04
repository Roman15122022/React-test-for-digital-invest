import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import IconButton from '@mui/material/IconButton';

const Map = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.lng }}>
            <Marker position={{ lat: props.lat, lng: props.lng }} />
        </GoogleMap>
    ))
);

const MapComponent = ({ lat, lng, onClose }) => (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
        <IconButton style={{ position: 'absolute', top: 10, right: 100, zIndex: 99999 }} onClick={onClose}>
            X
        </IconButton>
        <Map
            lat={lat}
            lng={lng}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAM6sXLLbim115W9MMZVaEHuTNvmSbsF9E&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
);

export default MapComponent;
