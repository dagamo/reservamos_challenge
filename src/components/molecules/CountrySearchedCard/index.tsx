import React from 'react';
import {View} from 'react-native';
import {H2} from '../../atoms/H2';
import {RadioSelect} from '../../atoms/RadioSelect';
import {styles} from './styles';

interface ICountrySearchedCard {
  countryName: string;
  isActive: boolean;
  onSelect: (active: boolean) => void;
}
export const CountrySearchedCard = ({
  countryName,
  onSelect,
  isActive,
}: ICountrySearchedCard) => {
  return (
    <View style={styles.cardContainer}>
      <H2 text={countryName} />
      <RadioSelect onPressRadio={onSelect} isActive={isActive} />
    </View>
  );
};
