import { Text, View, StyleSheet } from "react-native";
import axios from 'axios';

export default function Restaurants() {

    axios({
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin',
      }).then((response) => {
        console.log(response.data.companies);
        console.log(response.data.companies.map((a) => a.name))
      });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        flex: 1, 
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        height: 100,
    }
})