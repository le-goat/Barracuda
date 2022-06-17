// ScrollView, FlatList
import {Bar, BarList} from "../types/bar";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";
import React, {useEffect} from "react";
import {getBars} from "../requests/Read";
import {FlatList, Text, TouchableHighlight, View, StyleSheet} from "react-native";
import BarPreview from "../components/BarPreview";
// On a besoin d'une liste d'id de bar pour les afficher en appellant le component BarPreview ou un autre sans image

export const ResultsList = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [barList, setBarList] = React.useState<BarList>();
    console.log(barList);


    useEffect(() => {
        getBars().then((bars) => setBarList(bars));
    }, [])

    return (
        <View>
            <FlatList
                data={barList?.data}
                renderItem={({item}) => {
                    const mon_bar : Bar = {
                        bar_id: item.attributes.bar_id,
                        name: item.attributes.name,
                        gps_position: item.attributes.gps_position,
                        price: item.attributes.price,
                        Description: item.attributes.Description,
                        image: item.attributes.image
                    }
                    return (
                        <TouchableHighlight onPress={() => {
                            navigation.navigate('Bar', {infos: mon_bar})
                        }}>
                            <BarPreview {...mon_bar}/>
                        </TouchableHighlight>
                    )
                }

            }/>
        </View>
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