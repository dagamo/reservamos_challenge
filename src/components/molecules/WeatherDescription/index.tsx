import React from 'react';
import {Image, View} from 'react-native';
import {SmallText} from '../../atoms/SmallText';
import {TitleCard} from '../../atoms/TitleCard';
import {styles} from './styles';

interface IWeatherDescription {
  day: string;
  temperatureMin: number;
  temperatureMax: number;
  iconURL: string;
}
export const WeatherDescription = (props: IWeatherDescription) => {
  const {day, temperatureMax, temperatureMin, iconURL} = props;
  console.log('Url icon', iconURL);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TitleCard text={day} />
      </View>
      <View style={styles.imageContainer}>
        <View>
          <Image
            source={{
              width: 50,
              height: 50,
              uri: iconURL,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <SmallText text={`Min ${temperatureMin}ºC`} />
      <SmallText text={`Max ${temperatureMax}ºC`} />
    </View>
  );
};
