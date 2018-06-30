import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, Button } from 'react-native';
// import {connect} from "react-redux";

import styles from "./styles"
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
// import { Constants, MapView } from 'expo';
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import haversine from "haversine";

// import styles from "./styles";

const LATITUDE = 14.5651;
const LONGITUDE = 120.9943;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

const error = {
  general: "",
  fname: "",
  lname: "",
  cnumber: "",
  email: "",
  password: "",
  confirm_password: ""
}

class Map extends React.Component {
    constructor(props) {
        // super();

        // this.state = {
        //     mapRegion: {
        //         userLat: 37.78825,
        //         userLong: -122.4324,
        //         latitudeDelta: 0.0922,
        //         longitudeDelta: 0.0421,
        //     },
        // };

        super(props);

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE
            }),
            ambulanceLoc: {
                coordinate: {
                    lat: 14.5777, 
                    long: 120.9856,
                },
                title: "Current location",
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    onSubmit(data) {
        console.log(data);
    }

    onSuccess(user) {
        console.log("success function");
    }

    onError(error) {
        console.log("no u");
    }

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    // componentDidMount() {
    //     console.log("componentdidmount");
        
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log("LAT: " + position.coords.latitude);
    //             console.log("LONG: " + position.coords.longitude);
    //             this.setState({
    //                 userLat: position.coords.latitude,
    //                 userLong: position.coords.longitude,
    //                 error: null,
    //             });
    //         },
    //         (error) => this.setState({ error: error.message }),
    //         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    //     );
    // }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            position => {},
            error => alert(error.message),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
      }
    
    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
            const { coordinate, routeCoordinates, distanceTravelled } = this.state;
            const { latitude, longitude } = position.coords;

            const newCoordinate = {
                latitude,
                longitude
            };

            // if (Platform.OS === "android") {
            //     if (this.marker) {
            //     this.marker._component.animateMarkerToCoordinate(
            //         newCoordinate,
            //         500
            //     );
            //     }
            // } else {
            //     coordinate.timing(newCoordinate).start();
            // }

            this.setState({
                latitude,
                longitude,
                routeCoordinates: routeCoordinates.concat([newCoordinate]),
                distanceTravelled:
                distanceTravelled + this.calcDistance(newCoordinate),
                prevLatLng: newCoordinate
            });
        },
        error => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    }

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };
    
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });
    
    
  render() {

    return (
        // <View style={styles.container}>
        //     {/* <MapView
        //         //showsMyLocationButton
        //         showsUserLocation
        //         //scrollEnabled={false}
        //         //zoomEnabled={false}
        //         ref={map => this.map = map}
        //         initialRegion={this.state.region}
        //         style={styles.container}
        //         mapType='standard'

        //     >
        //     </MapView> */}
        //     {/* <MapView
        //         style={{ alignSelf: 'stretch', height: "100%" }}
        //         region={this.state.mapRegion}
        //         onRegionChange={this._handleMapRegionChange}
        //     /> */}

        //     <MapView style={styles.map}
        //         initialRegion={{
        //             latitude: 37.78825,
        //             longitude: -122.4324,
        //             latitudeDelta: 0.0,
        //             longitudeDelta: 0.0,
        //         }}
        //         showsUserLocation = {true}
        //         followUserLocation = {true}
        //         zoomEnabled = {true}
        //         >
        //         <MapView.Marker
        //             coordinate={{latitude: 37.78825,
        //             longitude: -122.4324}}
        //             title={"title"}
        //             description={"description"}
        //         />
        //     </MapView>
        // </View>


        <View style={styles.container}>
            <MapView
                style={styles.map}
                showUserLocation
                followUserLocation
                loadingEnabled
                region={this.getMapRegion()}
            >
                {/* <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} /> */}
                <MapView.Marker
                    coordinate={{latitude: this.state.latitude,
                        longitude: this.state.longitude}}
                    title={"You are here."}
                    pinColor={"aqua"}
                    // description={"description"}
                />
                <MapView.Marker
                    coordinate={{latitude: this.state.ambulanceLoc.coordinate.lat,
                        longitude: this.state.ambulanceLoc.coordinate.long}}
                    title={"Ambulance location"}
                    
                    // description={"description"}
                />
                {/* <Marker.Animated 
                    ref={marker => {
                    this.marker = marker;
                    }}
                    coordinate={this.state.coordinate} /> */}
            </MapView>
            <Button
                raised
                color="#ff5b84"
                title={"Arrive to hospital"}
                borderRadius={4}
                buttonStyle={styles.upButton}
                textStyle={styles.buttonText}
                onPress={ console.log("woo")}/>
            <View style={styles.buttonContainer}>
                <View style={[styles.bubble, styles.button]}>
                    <View style={styles.leftHandBubble}>
                        <Image source={require('../../../../assets/icons/ambulance.png')}
                            style={styles.iconAmbulance}
                            resizeMode='contain'/>
                    </View>
                    <View style={styles.rightHandBubble}>
                        {/* <Text style={styles.bottomBarContent}>
                            Your ambulance is <Text style={styles.emphasisText}>{parseFloat(this.state.distanceTravelled).toFixed(2)} km</Text> away.
                        </Text> */}
                        <Text style={styles.bottomBarContent}>
                            Your ambulance is <Text style={styles.emphasisText}>0.87 km</Text> away.
                        </Text>
                        <Text style={[styles.emphasisText, { paddingTop: 5, }]}>
                            Philippine General Hospital
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}


export default Map;