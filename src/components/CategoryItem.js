import { StyleSheet, Text, View, Image } from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({ name, imageUrl, index, active }) {
    return (
        <View 
        style={[styles.container, 
        styles.elevation, 
        index===0 ? {marginLeft: 25} : {marginLeft: 10},
        active ? {backgroundColor: rgb(256,234,100)} : {backgroundColor: "white"}
        ]}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} />
            </View>
            <Text style={styles.header}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        // marginHorizontal: 8,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5
    },
    header: {
        fontWeight: "bold"
    }
})