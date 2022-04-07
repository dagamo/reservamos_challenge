import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';

interface IRadioSelect {
  onPressRadio: (active: boolean) => void;
  isActive: boolean;
}
export const RadioSelect = ({onPressRadio, isActive}: IRadioSelect) => {
  const [active, setActive] = useState(false);

  const onPress = () => {
    setActive(!active);
    onPressRadio(!active);
  };
  const helperStyle = isActive ? styles.active : styles.inactive;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.radio, helperStyle]} />
    </TouchableOpacity>
  );
};
