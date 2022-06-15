import * as React from "react";
import {NavigationContainer, NavigationProp, RouteProp} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from "./RootStackParamList";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomePage} from "./sources/screens/HomePage";
import Login from "./sources/components/Login";


const Stack = createNativeStackNavigator()


export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={HomePage}/>
                <Stack.Screen name="LoginRegister" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

