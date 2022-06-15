// La barre de recherche qui devient un formulaire quand on la touche et qui envoie une recherche de bar (sur la map ou la resultList)

import {StyleSheet, TextInput, View} from "react-native";
import React from "react";

const ResearchButton = () => {
    const [text, onChangeText] = React.useState("");


    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Recherchez un bar ..."
                value={text}

            />



        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default ResearchButton;