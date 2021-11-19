import React from "react";
import { View, Text, FlatList } from "react-native";
import UseFetchMeal from "../hooks/useFetchMeal";
import MealCard from "./mealCard";

const Meal = (props) => {
  const info = props.route.params.data.strCategory
  const {data, error, loading} = UseFetchMeal(info)

  return(
    <View> 
      {
        <FlatList data={data.meals} renderItem={({item}) => <MealCard item = {item}/> }/>
      }
     
    </View>
  )
}
export default Meal