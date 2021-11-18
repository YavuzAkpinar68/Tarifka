import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Categories from './Pages/Categories';
import Detail from './Pages/Detail';
import Meal from './Pages/Meal';

const Stack = createNativeStackNavigator()

const App = () => {
  return(
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Categories" component={Categories}></Stack.Screen>
       <Stack.Screen name="Meal" component={Meal}></Stack.Screen>
       <Stack.Screen name ="Detail" component={Detail}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  )
}


export default App;
