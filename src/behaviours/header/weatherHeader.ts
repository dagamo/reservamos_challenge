import {Alert} from 'react-native';
import {HeaderBehaviour} from './header';

export class WeatherHeader extends HeaderBehaviour {
  public title: string;
  public searchPlaceholder: string;
  constructor(searchPlaceHolder: string) {
    super();
    this.title = 'Reservemos';
    this.searchPlaceholder = searchPlaceHolder;
  }
  public onPressSearchButton = () => {
    Alert.alert('Pressed');
  };
}
