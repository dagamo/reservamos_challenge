import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface IH2 {
  text: string;
}
export const H2 = ({text}: IH2) => {
  return <Text style={styles.h2}>{text}</Text>;
};
