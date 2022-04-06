import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {WeatherComparisonScreen} from '../../../screens/WheatherComparison/index';
import {SelectionCountriesScreen} from '../../../screens/SelectionCountries';

const Stack = createStackNavigator();
export const Main = () => {
  const screenVertical = {
    gestureEnabled: false,
    gestureDirection: 'vertical',
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  };
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={WeatherComparisonScreen} />
      <Stack.Screen
        name="AddCountries"
        component={SelectionCountriesScreen}
        options={screenVertical}
      />
    </Stack.Navigator>
  );
};
