import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {WeatherComparisonScreen} from '../../../screens/WheatherComparison/index';
import {SelectionCountriesScreen} from '../../../screens/SelectionCountries';
import {WheaterComparisonProvider} from './../../../providers/WeatherProvider';

const Stack = createStackNavigator();
export const Main = () => {
  const screenVertical = {
    gestureEnabled: false,
    gestureDirection: 'vertical',
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  };
  return (
    <WheaterComparisonProvider>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={WeatherComparisonScreen} />
        <Stack.Screen
          name="AddCountries"
          component={SelectionCountriesScreen}
          options={screenVertical}
        />
      </Stack.Navigator>
    </WheaterComparisonProvider>
  );
};
