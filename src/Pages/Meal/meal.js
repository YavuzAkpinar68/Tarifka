import React from "react";
import { View, Text } from "react-native";

const Meal = (props) => {
  const data = props.route.params.data
  return(
    <View>
      <Text>Meals</Text>
    </View>
  )
}
export default Meal