import React from "react";
import { View, Text, FlatList } from "react-native";
import MealCard from "./mealCard";
import UseFetch from "../hooks/useFetch";

const Meal = (props) => {
  const info = props.route.params.data.strCategory
  const {data, error, loading} = UseFetch(`filter.php?c=${info}`)

  return(
    <View> 
      {
        <FlatList data={data.meals} renderItem={({item}) => <MealCard item = {item}/> }/>
      }
     
    </View>
  )
}
export default Meal