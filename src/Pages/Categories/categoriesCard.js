import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
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
      <Text style={styles.text}>{item.strCategory}</Text>
    </TouchableOpacity>

  )
}
export default CategoriesCard

const styles = StyleSheet.create({
  viewContainer:{
    flexDirection:"row",
    margin:10,
    backgroundColor:"seashell",
    padding:10,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
    alignItems:"center",
  },
  imageContainer:{
    minHeight:100,
    width:Dimensions.get("screen").width/4,
    resizeMode:"contain"
  },
  text:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"900",
    paddingLeft:20
  }
})