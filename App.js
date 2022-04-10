// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from "expo-status-bar"
import {View, Text, StyleSheet} from "react-native"
import Header from "./src/components/Header"


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>App Content</Text>
      <StatusBar style={styles.containerOne}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    // color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  containerOne: {
    backgroundColor: "#fff"
  }
})