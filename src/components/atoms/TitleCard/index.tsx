import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface ITitleCard {
  text: string;
}
export const TitleCard = ({text}: ITitleCard) => (
  <Text style={styles.text}>{text}</Text>
);
