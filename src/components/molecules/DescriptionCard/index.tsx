import React from 'react';
import {View} from 'react-native';
import {SubtitleCard} from '../../atoms/SubtitleCard';
import {TitleCard} from '../../atoms/TitleCard';

interface IDescriptionCard {
  title: string;
  subtitle: string;
}
export const DescriptionCard = ({title, subtitle}: IDescriptionCard) => {
  return (
    <View>
      <TitleCard text={title} />
      <SubtitleCard text={subtitle} />
    </View>
  );
};
