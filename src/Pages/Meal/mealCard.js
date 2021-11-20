import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MealCard = ({item}) => {
  const {navigate} = useNavigation()
  return(
    <TouchableOpacity onPress={() => navigate("Detail", {data: item})}>
      <Image source={{uri:item.strMealThumb}} style={styles.imageContainer}></Image>
      <Text>{item.strMeal}</Text>
    </TouchableOpacity>
  )
}
export default MealCard

const styles = StyleSheet.create({
  imageContainer:{
    height:200,
    width:200
  }
})