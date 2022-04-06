import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {WeatherComparisonBehaviour} from '../../behaviours/comparisonTemplate/weatherComparison';
import {WeatherHeader} from '../../behaviours/header/weatherHeader';
import {WeatherComparison} from '../../components/templates/WeatherComparison/index';
import {WheaterComparisonContext} from '../../providers/WeatherProvider';
import {RootStackParamList} from '../../types/stackList.type';
import {styles} from './styles';

export const WeatherComparisonScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const {countriesComparison, countriesSelected} = useContext(
    WheaterComparisonContext,
  );
  const header = new WeatherHeader('Agrega un destino', navigation);
  const weatherComparisonTemplate = new WeatherComparisonBehaviour(
    header,
    countriesSelected,
    countriesComparison,
  );
  console.log('wehater props', weatherComparisonTemplate);
  return (
    <>
      <SafeAreaView style={styles.topSafeAreaView} />
      <SafeAreaView style={styles.safeAreaView}>
        <WeatherComparison {...weatherComparisonTemplate} />
      </SafeAreaView>
    </>
  );
};
