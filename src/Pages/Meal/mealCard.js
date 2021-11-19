import React from "react";
import { View, Text } from "react-native";

const MealCard = ({item}) => {
  return(
    <View><Text>{item.strMeal}</Text></View>
  )
}
export default MealCard