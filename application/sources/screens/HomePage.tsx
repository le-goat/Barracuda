import {StyleSheet, View, Button, TouchableOpacity, Text} from "react-native";
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

            <TouchableOpacity
                style={styles.buttonProfile}
                onPress={() =>
                    navigation.navigate('EditProfile')
                }
            >
                <Text>Modifier le profil</Text>
            </TouchableOpacity>


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
        marginTop: 16,
        borderWidth: 2,
        backgroundColor: '#21B70F',
        paddingVertical: 8,
        width: 300,
        textAlign: "center",
        borderColor: "#FFFFFF",
        borderRadius: 6,
    }
});
