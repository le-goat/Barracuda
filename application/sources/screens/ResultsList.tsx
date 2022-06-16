import {FunctionComponent} from "react";
import {Button, ScrollView, StyleSheet, View, Text} from "react-native";
import ResearchButton from "../components/ResearchButton";
import BarPreview from "../components/BarPreview";
import {StatusBar} from "expo-status-bar";
import * as React from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const ResultsList: FunctionComponent<Props> = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Nom du mec, X résultats pour votre recherche :</Text>

            <BarPreview id={1}/>
            <BarPreview id={1}/>
            <BarPreview id={1}/>

        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    header: {
        fontSize: 25,
        margin: 10,
    },
});