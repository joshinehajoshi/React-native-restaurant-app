import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {View,StyleSheet} from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Search from "./src/components/Search";


export default function App() {

  const [term, setTerm] = useState("Burger");
  
  
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/hamburger.png")
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png")
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/smoothie.png")
    },
    {
      name: "Meat",
      imageUrl: require("./src/assets/images/meat.png")
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png")
    },
    {
      name: "Cake",
      imageUrl: require("./src/assets/images/cake.png")
    },
    
  ]

  return (
    <View>
      <Header />
      <Search 
      setTerm={setTerm}
      />
      <View style={styles.container}>
       <Categories 
       term={term}
       categories={commonCategories}
       setTerm={setTerm} />
      </View>
     
      <StatusBar/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25
  }
})