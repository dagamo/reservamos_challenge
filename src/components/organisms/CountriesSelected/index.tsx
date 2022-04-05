import React from 'react';
import {ScrollView, View} from 'react-native';
import {Chip} from '../../atoms/Chip';
import {styles} from './styles';

export const CountriesSelected = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      <View style={styles.chipContainer}>
        <Chip text="Colombia" />
      </View>
    </ScrollView>
  );
};
