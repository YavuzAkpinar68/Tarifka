import React from "react";
import { View, Text, FlatList } from "react-native";
import CategoriesCard from "./categoriesCard";
import UseFetch from "../hooks/useFetch";
import Loading from "../../Components/Loading/loading";

const Categories = () => {
  const {data, error, loading} = UseFetch()

  if (error) {
    return <View><Text>{error}</Text></View>;
  }
  return(
    <View>
      { loading ? <Loading />
      :<FlatList
      data={data.categories}
      renderItem={({item}) => <CategoriesCard item={item}/> }
      />
        
      }
      
    </View>
  )
}
export default Categories