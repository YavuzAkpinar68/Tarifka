import React from "react";
import { FlatList, Text, View } from "react-native";
import Loading from "../../Components/Loading/loading";
import UseFetch from "../hooks/useFetch";
import DetailCard from "./DetailCard";

const Detail = (props) => {
  const infoid = props.route.params.data.idMeal
  const {loaidng, error, data} = UseFetch(`lookup.php?i=${infoid}`)

  
  if (error) {
    return (
      <View>
      <Text>{error}</Text>
    </View>
    )
  }

  return(
    <View> 
      {loaidng ? <Loading /> :
      <FlatList data={data.meals} renderItem={({item}) => <DetailCard item = {item}/>}></FlatList>}
      
    </View>
  )
}
export default Detail