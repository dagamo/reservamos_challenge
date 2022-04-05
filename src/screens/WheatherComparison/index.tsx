import React from 'react';
import {SafeAreaView} from 'react-native';
import {WeatherComparisonBehaviour} from '../../behaviours/comparisonTemplate/weatherComparison';
import {WeatherHeader} from '../../behaviours/header/weatherHeader';
import {WeatherComparison} from '../../components/templates/WeatherComparison/index';
import {styles} from './styles';

export const WeatherComparisonScreen = () => {
  const header = new WeatherHeader('Agrega un destino');
  const weatherComparisonTemplate = new WeatherComparisonBehaviour(header);
  return (
    <>
      <SafeAreaView style={styles.topSafeAreaView} />
      <SafeAreaView style={styles.safeAreaView}>
        <WeatherComparison {...weatherComparisonTemplate} />
      </SafeAreaView>
    </>
  );
};
