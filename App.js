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

import {View, Text, StyleSheet, TouchableWithoutFeedbackBase} from "react-native"


export default function App() {
  return (
    <View style={styles.container}>
      <Text>App Content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    // color: "white",
    alignItems: "center",
    justifyContent: "center"
  }
})