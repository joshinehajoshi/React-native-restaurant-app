import {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { elevation } from '../common/styles';

export default function Search({setTerm}) {

    const [input, setInput] = useState("");

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25}/>
            <TextInput
            style={styles.imput}
            placeholder="Restaurants, food"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 40,
    },
    elevation,
    imput: {
        fontSize: 20,
        marginLeft: 10
    }
})