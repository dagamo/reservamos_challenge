import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WeatherComparisonScreen} from '../../../screens/WheatherComparison/index';
import {AddCountriesScreen} from '../../../screens/AddCountries';

const Stack = createNativeStackNavigator();
export const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WeatherComparisonScreen} />
      <Stack.Screen name="AddCountries" component={AddCountriesScreen} />
    </Stack.Navigator>
  );
};
