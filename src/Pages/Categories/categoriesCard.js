import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategoriesCard = ({item}) => {
  return(
    <View style={styles.viewContainer}>
      <Image
        style={styles.imageContainer} 
        source={{uri:item.strCategoryThumb}}/>
      <Text>{item.strCategory}</Text>
    </View>
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