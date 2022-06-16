import {Bar} from "../types/bar";
// Image

// Ici on veut afficher le nom, une image la distance et le prix ?

import {ImageBackground, Text, View} from "react-native";
import {getBar} from "../requests/Read";
import React, {useEffect} from "react";

type Id_bar = {
    id: number
}

const BarPreview = ({id}: Id_bar)/* (id_bar: number)*/ => {

    const [barInfo, setBarInfo ] = React.useState<Bar>()

    getBar(id).then((bar) => setBarInfo(bar));
/*
    useEffect(() => {
        getBar(id_bar)
            .then((bar) => setBarInfo(bar));
    }, [])
*/


    return (
        <View
            style={{borderWidth: 2, borderStyle: "solid", borderColor: "black", borderRadius: 15}}
            /*data={barInfo}
            renderItem={({item}) => (

            )}*/
        >
                <ImageBackground source={require('./../../assets/image_bar.jpg')}
                                 style={{ height:200, width:300, borderStyle: "solid", borderRadius: 15}}/>
                <Text>{barInfo?.name}</Text>
                    <Text>Le prix ou la note</Text>
                    <Text>Les Tags</Text>
        </View>
    )
}

export default BarPreview;