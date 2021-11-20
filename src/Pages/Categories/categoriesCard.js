import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Config from "react-native-config";

const CategoriesCard = ({item}) => {
  const {navigate} = useNavigation()

  return(
    <TouchableOpacity
      onPress={() => navigate("Meal", {data: item})}
      style={styles.viewContainer}>
      <Image
        style={styles.imageContainer} 
        source={{uri:item.strCategoryThumb}}/>
      <Text>{item.strCategory}</Text>
    </TouchableOpacity>

  )
}
export default CategoriesCard

const styles = StyleSheet.create({
  viewContainer:{
    flexDirection:"row"
  },
  imageContainer:{
    height:200,
    width:200
  }
})