import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface ISubtitleCard {
  text: string;
}
export const SubtitleCard = ({text}: ISubtitleCard) => (
  <Text style={styles.text}>{text}</Text>
);
