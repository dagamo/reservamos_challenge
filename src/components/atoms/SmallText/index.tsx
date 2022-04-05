import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface ISmallText {
  text: string;
}
export const SmallText = ({text}: ISmallText) => {
  return <Text style={styles.text}>{text}</Text>;
};
