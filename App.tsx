import React from 'react';
import {SafeAreaView} from 'react-native';
import {WeatherComparison} from './src/templates/WeatherComparison';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <WeatherComparison />
  </SafeAreaView>
);

export default App;
