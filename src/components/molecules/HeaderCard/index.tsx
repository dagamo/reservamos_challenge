import React from 'react';
import {View} from 'react-native';
import {Avatar} from '../../atoms/Avatar';
import {DescriptionCard} from '../DescriptionCard';
import {styles} from './styles';

export const HeaderCard = () => {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.descriptionContainer}>
        <DescriptionCard title="Colombia" subtitle="Cartagena" />
      </View>
    </View>
  );
};
