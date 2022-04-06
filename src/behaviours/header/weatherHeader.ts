import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/stackList.type';
import {HeaderBehaviour} from './header';

export class WeatherHeader extends HeaderBehaviour {
  public title: string;
  public searchPlaceholder: string;
  private navigation: NativeStackNavigationProp<RootStackParamList>;
  constructor(
    searchPlaceHolder: string,
    navigation: NativeStackNavigationProp<RootStackParamList>,
  ) {
    super();
    this.title = 'Reservemos';
    this.searchPlaceholder = searchPlaceHolder;
    this.navigation = navigation;
  }
  public onPressSearchButton = () => {
    this.navigation.push('AddCountries');
  };
}
