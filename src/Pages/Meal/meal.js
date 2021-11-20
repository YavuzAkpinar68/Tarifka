import React from "react";
import { View, Text, FlatList } from "react-native";
import MealCard from "./mealCard";
import UseFetch from "../hooks/useFetch";
import Loading from "../../Components/Loading/loading";

const Meal = (props) => {
  const info = props.route.params.data.strCategory
  const {data, error, loading} = UseFetch(`filter.php?c=${info}`)

  if (error) {
    return (
      <View>
      <Text>{error}</Text>
    </View>
    )
  }

  return(
    <View> 
      {loading ? <Loading /> :
        <FlatList 
          data={data.meals} 
          renderItem={({item}) => <MealCard item = {item}/> }
          contentContainerStyle={{backgroundColor:"aqua"}}/>
      }
     
    </View>
  )
}
export default Meal