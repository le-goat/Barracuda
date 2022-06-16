import {Bar} from "../types/bar";
import {StyleSheet} from "react-native";
// Image

// Ici on veut afficher le nom, une image la distance et le prix ?

import {ImageBackground, Text, View} from "react-native";
import {getBar} from "../requests/Read";
import React, {useEffect} from "react";

type Id_bar = {
    id: number
}

const BarPreview = ({id}: Id_bar)/* (id_bar: number)*/ => {

    const [barInfo, setBarInfo] = React.useState<Bar>()

    getBar(id).then((bar) => setBarInfo(bar));
    /*
        useEffect(() => {
            getBar(id_bar)
                .then((bar) => setBarInfo(bar));
        }, [])
    */


    return (
        <View
            style={styles.view1}>
            <View
                style={styles.view2}
                /*data={barInfo}
                renderItem={({item}) => (

                )}*/
            >

                <ImageBackground source={require('./../../assets/image_bar.jpg')}
                                 style={styles.image}/>
                <Text style={styles.titre}>Nom du bar</Text>
                <Text style={styles.note}>4.4/5</Text>

                <View style={styles.viewtag}>
                    <Text style={styles.tag}>bar à chat</Text>
                    <Text style={styles.tag}>cocktails</Text>
                    <Text style={styles.tag}>planche apéro</Text>
                    <Text style={styles.tag}>planche apéro</Text>
                </View>
                {/*<Text style={styles.text}>{barInfo?.name}</Text>*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#EAECEA',
        margin: 6,
        borderRadius: 10,
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