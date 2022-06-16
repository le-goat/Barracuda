import {StyleSheet, View, Button} from "react-native";
import ResearchButton from "../components/ResearchButton";
import {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import Login from "../components/Login";
import {StatusBar} from "expo-status-bar";
import * as React from "react";
import {RootStackParamList} from "../../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const HomePage: FunctionComponent<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View
                style={styles.viewbutton}>
                <Button
                    title="Login"

                    onPress={() =>
                        navigation.navigate('Login')

                    }/>
            </View>


            <ResearchButton/>


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
});
