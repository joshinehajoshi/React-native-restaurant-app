import { StatusBar } from "expo-status-bar"
import {View,StyleSheet, FlatList, Text} from "react-native"
import CategoryItem from "./src/components/CategoryItem"
import Header from "./src/components/Header"
import Search from "./src/components/Search"


export default function App() {

  const commonCategories = [
    {
      id: 1,
      name: "Burger",
      imageUrl: require("./src/assets/images/hamburger.png")
    },
    {
      id: 2,
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png")
    },
    {
      id: 3,
      name: "Dessert",
      imageUrl: require("./src/assets/images/smoothie.png")
    },
    {
      id: 4,
      name: "Meat",
      imageUrl: require("./src/assets/images/meat.png")
    },
    {
      id: 5,
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png")
    },
    {
      id: 6,
      name: "Cake",
      imageUrl: require("./src/assets/images/cake.png")
    },
    
  ]
  return (
    <View>
      <Header />
      <Search />
      <FlatList
      data={commonCategories}
      renderItem={({item}) => {
        console.log(item);
        return <CategoryItem 
        name={item.name} 
        imageUrl={item.imageUrl}
         />
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
      <StatusBar/>
    </View>
  )
}
