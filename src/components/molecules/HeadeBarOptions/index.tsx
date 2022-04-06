import React from 'react';
import {View} from 'react-native';
import {HeaderBarOptionsBehaviour} from '../../../behaviours/headerBarOptions/headerBarOptions';
import {ReadyButton} from '../../atoms/ReadyButton';
import {WordCloseButton} from '../../atoms/WordCloseButton';
import {styles} from './styles';

export const HeaderBarOptions = ({
  onPressClose,
  onPressReady,
}: HeaderBarOptionsBehaviour) => {
  return (
    <View style={styles.container}>
      <WordCloseButton onPressClose={onPressClose} />
      <ReadyButton onPressReady={onPressReady} />
    </View>
  );
};
