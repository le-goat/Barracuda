import {Bar} from "../types/bar";
// Image

// Ici on veut afficher le nom, une image la distance et le prix ?

import {FlatList, ImageBackground, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet} from "react-native";
import {getBar} from "../requests/Read";
import React, {FunctionComponent, useEffect, useState} from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";

const BarPreview = (bar: Bar) => {


    return (
        <View style={{borderWidth: 2, borderStyle: "solid", borderColor: "black", borderRadius: 15}}>
            <ImageBackground source={require('./../../assets/' + bar.image)}
                             style={{height: 200, width: 300, borderStyle: "solid", borderRadius: 15}}/>
            <Text>{bar.name}</Text>
            <Text>Le prix ou la note</Text>
            <Text>{bar.Description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#EAECEA',
        margin: 6,
        borderRadius: 10,
        alignSelf: "center",
    },
    view2: {
        padding: 20,
        width: '100%',
    },
    tag: {
        fontSize: 16,
        backgroundColor: '#D1D1D1',
        textAlign: "center",
        width: '30%',
        margin: 4,
    },
    viewtag: {
        flexDirection: "row",
        flexWrap: "wrap",
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
        width: '100%',
        height: 200,
        alignSelf: "center"
    }
})

export default BarPreview;