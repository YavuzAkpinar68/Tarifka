import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from "react-native";

const MealCard = ({item}) => {
  const {navigate} = useNavigation()
  return(
    <TouchableOpacity
      style={styles.viewContainer} 
      onPress={() => navigate("Detail", {data: item})}>
      <ImageBackground
        imageStyle={{borderRadius:15}}
        testID={item.strMeal} 
        source={{uri:item.strMealThumb}} 
        style={styles.imageContainer}>
          <Text style={styles.text}>{item.strMeal}</Text>
        </ImageBackground>
      
    </TouchableOpacity>
  )
}
export default MealCard

const styles = StyleSheet.create({
  viewContainer:{
    flex:1,
    borderRadius:20
  },
  imageContainer:{
    minHeight:200,
    justifyContent:"flex-end",
    flex:1,
    margin:5,

  },
  text:{
    paddingLeft:10,
    color: "white",
    backgroundColor: "#000000c0",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    fontSize:20

  }
})