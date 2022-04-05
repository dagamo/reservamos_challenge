import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';

interface ITitle {
  text: string;
}
export const Title = ({text}: ITitle) => {
  return <Text style={styles.title}>{text}</Text>;
};
