// La carte interactive -> Prends en paramètre une liste de bar et doit trouver la position de l'utilisateur
import {View} from "react-native";
import MapboxGL from '@react-native-mapbox-gl/maps';
// import MapView, { Marker } from "react-native-maps";
// import MapboxGL from "@rnmapbox/maps";
import React, {useState} from "react";
import {Component} from "react";
// import MapView from 'react-native-maps';

MapboxGL.setAccessToken('pk.eyJ1IjoibGUtZ29hdCIsImEiOiJjbDRmOXJ6ZnMwMG5rM2RzaHg4NGh2bHdiIn0.GT9RNz1K1DkL_PzKiuFTlg');
MapboxGL.setConnected(true);
// console.disableYellowBox = true; // Pas sur de ça  #Manu : je pense pas non plus


/*export default function Map() {
    return(
        <View>
            <MapView/>
        </View>
    )
}*/


export const Map = () => {
    const coordinates = useState([])

    return (
        <View style={styles.MainContainer}>
            <View style={styles.SubContainer}>
                <MapboxGL.MapView style={styles.Mapbox}>
                    <MapboxGL.Camera zoomLevel={9} centerCoordinate={coordinates}/>
                    <MapboxGL.PointAnnotation id={1} coordinate={coordinates}/>
                </MapboxGL.MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    SubContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    Mapbox: {
        flex: 1,
    },
});

// export default Map;