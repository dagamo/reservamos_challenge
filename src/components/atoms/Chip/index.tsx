import React from 'react';
import {View, Text} from 'react-native';
import {CloseButton} from '../CloseButton';
import {styles} from './styles';

interface IChip {
  text: string;
}
export const Chip = ({text}: IChip) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <CloseButton />
    </View>
  );
};
