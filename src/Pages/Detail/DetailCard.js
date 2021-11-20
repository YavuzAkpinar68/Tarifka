import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DetailCard = ({item}) => {
  return(
    <View style={styles.viewContainer}>
      <Image
        style={styles.image} 
        source={{uri:item.strMealThumb}}/>
      <View style={styles.titleView}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text>{item.strArea}</Text>  
      </View>  
      <Text style={styles.instruction}>{item.strInstructions}</Text>
      <TouchableOpacity style={styles.touchableContainer}>
        <Text style={styles.youtubeText}>Watch On Youtube!!</Text>
      </TouchableOpacity>
    </View>
  )
}
export default DetailCard

const styles = StyleSheet.create({
  image:{
    height:Dimensions.get("screen").height/4,
    resizeMode:"stretch"
  },
  viewContainer:{
    backgroundColor:"silver"
  },
  titleView:{
    padding:10,
    borderBottomWidth:1
  },
  title:{
    fontSize:25
  },
  instruction:{
    paddingLeft:10,
    paddingRight:5,
    paddingTop:10
  },
  touchableContainer:{
    backgroundColor:"red",
    borderRadius:5,
    margin:10,
    alignItems:"center"
  },
  youtubeText:{
    fontSize:25,
    color:"white",
    padding:10
  }
})