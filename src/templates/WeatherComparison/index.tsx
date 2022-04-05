import React from 'react';
import {View} from 'react-native';
import {SearchSection} from '../../components/molecules/SearchSection';

export const WeatherComparison = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <SearchSection />
      </View>
      <View style={{flex: 4, backgroundColor: 'yellow'}}></View>
    </>
  );
};
