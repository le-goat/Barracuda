import {StyleSheet, View, Button, TouchableOpacity, Text, Image, ImageBackground} from "react-native";
import ResearchButton from "../components/ResearchButton";
import {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import Login from "../components/Login";
import {StatusBar} from "expo-status-bar";
import * as React from "react";
import {RootStackParamList} from "../../RootStackParamList";
import EditProfile from "../components/EditProfile";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const HomePage: FunctionComponent<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>


            <ResearchButton/>
            <View
                style={styles.viewButtonProfile}>
                <TouchableOpacity
                    style={styles.buttonProfile}
                    onPress={() =>
                        navigation.navigate('EditProfile')
                    }
                >
                    <ImageBackground source={require('./../../assets/param.png')}
                                     style={styles.image}/>

                </TouchableOpacity>
            </View>


            <StatusBar style="auto"/>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    viewbutton: {
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
    },
    buttonProfile: {
        borderWidth: 2,
        paddingVertical: 8,
        width: 50,
        textAlign: "center",
        borderColor: "#21B70F",
        borderRadius: 6,
    },
    viewButtonProfile: {
        alignSelf: "flex-end",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    image: {
        width: 20,
        height: 20,
        alignSelf: "center",

    },
});
