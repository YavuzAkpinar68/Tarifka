import React from "react";
import { Text, View } from "react-native";

const DetailCard = ({item}) => {
  return(
    <View>
      <Text>{item.strMeal}</Text>
    </View>
  )
}
export default DetailCard