import React from "react";
import { Text, View } from "react-native";

const DetailCard = ({item}) => {
  return(
    <View>
      <Text>{item.strMeal}</Text>
      <Text>{item.strInstructions}</Text>
    </View>
  )
}
export default DetailCard