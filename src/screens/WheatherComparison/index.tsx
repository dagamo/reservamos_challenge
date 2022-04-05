import React from 'react';
import {SafeAreaView} from 'react-native';
import {WeatherComparison} from './../../templates/WeatherComparison/index';
import {styles} from './styles';

export const WeatherComparisonScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeAreaView} />
      <SafeAreaView style={styles.safeAreaView}>
        <WeatherComparison />
      </SafeAreaView>
    </>
  );
};
