// La page du bar -> On affiche toutes les infos qu'on a sur le bar


import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";

type Props = {
    route: RouteProp<RootStackParamList, 'Bar'>
}


const Bar = ({route}: Props) => {
    const image : string = route.params.infos.image;
    return (
        <View style={styles.view}>
            <ImageBackground source={require('./../../assets/image_bar.jpg'/* + image*/)}
                             style={styles.image}/>
            <Text style={styles.titre}> Fiche du bar : {route.params.infos.name}</Text>
            <Text style={styles.resume}>{route.params.infos.Description}</Text>
            {/*<Text>{route.params.infos.gps_position}</Text>*/}
            <Text style={styles.price}>Gamme de prix : {route.params.infos.price}/5</Text>
            <Text style={styles.adresse}>Adresse : {route.params.infos.contact}</Text>
        </View>
    )
}

export default Bar;


const styles = StyleSheet.create({

    titre: {
        fontSize: 20,
        alignSelf: "center",
        marginBottom: 10,
    },
    view: {
        width: '70%',
        alignSelf: "center",
        backgroundColor: '#EAECEA'
    },
    image: {
        width: '100%',
        height: 200,
        alignSelf: "center",
    },
    resume: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    price: {
        alignSelf: 'center',
        marginTop: 20,
    },
    adresse: {
        alignSelf: 'center',
        marginTop: 10,
    }
})