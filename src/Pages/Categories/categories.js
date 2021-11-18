import React from "react";
import { View, Text, FlatList } from "react-native";
import CategoriesCard from "./categoriesCard";
import UseFetch from "../hooks/useFetch";

const Categories = () => {
  const {data} = UseFetch()

  return(
    <View>
      <FlatList
        data={data.categories}
        renderItem={({item}) => <CategoriesCard item={item}/> }
        ></FlatList>
    </View>
  )
}
export default Categories