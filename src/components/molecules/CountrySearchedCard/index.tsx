import React from 'react';
import {View} from 'react-native';
import {H2} from '../../atoms/H2';
import {RadioSelect} from '../../atoms/RadioSelect';
import {styles} from './styles';

interface ICountrySearchedCard {
  countryName: string;
  onSelect: (active: boolean) => void;
}
export const CountrySearchedCard = ({
  countryName,
  onSelect,
}: ICountrySearchedCard) => {
  return (
    <View style={styles.cardContainer}>
      <H2 text={countryName} />
      <RadioSelect onPressRadio={onSelect} />
    </View>
  );
};
