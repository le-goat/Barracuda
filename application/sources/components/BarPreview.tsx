import {Bar} from "../types/bar";
// Image

// Ici on veut afficher le nom, une image la distance et le prix ?

import {
    FlatList,
    ImageBackground,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    StyleSheet,
    Image
} from "react-native";
import {getBar} from "../requests/Read";
import React, {FunctionComponent, useEffect, useState} from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";

const BarPreview = (bar: Bar) => {

    const image : string = bar.image;

    return (
        <View style={styles.view2}>
            <View style={styles.view1}>
                <ImageBackground source={require('./../../assets/image_bar.jpg'/* + bar.image*/)}
                                 style={styles.image}/>
                <Text style={styles.titre}>
                    {bar.name}
                </Text>

                <Text style={styles.prix}>{bar.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#EAECEA',
        margin: 6,
        borderRadius: 10,
        alignSelf: "center",
        padding: 5,
    },
    view2: {
        padding: 10,
        width: '100%',
    },
    prix: {
        fontSize: 16,
        backgroundColor: '#D1D1D1',
        textAlign: "center",
        width: '30%',
        margin: 4,
    },
    titre: {
        fontSize: 24,
        marginTop: 4,
    },
    note: {
        fontSize: 16,
        backgroundColor: '#0DC13B',
        width: '15%',
        height: 20,
        alignSelf: 'flex-end',
        textAlign: "center",
        borderRadius: 32,
    },
    image: {
        width: 400,
        height: 150,
        alignSelf: "center",
    }
})

export default BarPreview;