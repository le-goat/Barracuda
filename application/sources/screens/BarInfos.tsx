// La page du bar -> On affiche toutes les infos qu'on a sur le bar


import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";
import {Text, View} from "react-native";

type Props = {
    route: RouteProp<RootStackParamList, 'Bar'>
}


const Bar = ({route}: Props) => {
    return (
        <View>
            <Text>{route.params.infos.name}</Text>
            <Text>{route.params.infos.Description}</Text>
            {/*<Text>{route.params.infos.gps_position}</Text>*/}
            <Text>{route.params.infos.price}</Text>
        </View>
    )
}

export default Bar;