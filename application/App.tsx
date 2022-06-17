import * as React from "react";
import {NavigationContainer, NavigationProp, RouteProp} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomePage} from "./sources/screens/HomePage";
import Login from "./sources/components/Login";
import Register from "./sources/components/Register";
import {ResultsList} from "./sources/screens/ResultsList";
import EditProfile from "./sources/components/EditProfile";


const Stack = createNativeStackNavigator()


export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="ResultsList" component={ResultsList}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

