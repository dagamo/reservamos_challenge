import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/stackList.type';
import {HeaderBarOptionsBehaviour} from './headerBarOptions';

export class HelperBarOptions extends HeaderBarOptionsBehaviour {
  private navigation: NativeStackNavigationProp<RootStackParamList>;
  constructor(navigation: NativeStackNavigationProp<RootStackParamList>) {
    super();
    this.navigation = navigation;
  }

  public onPressClose = () => {
    this.navigation.goBack();
  };
  public onPressReady = () => {
    this.navigation.goBack();
  };
}
