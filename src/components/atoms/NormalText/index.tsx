import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface INormalText {
  text: string;
}
export const NormalText = ({text}: INormalText) => {
  return <Text style={styles.text}>{text}</Text>;
};
