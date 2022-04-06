import {IHeaderBarOptions} from '../../interfaces/headerBarOptions.interface';

export abstract class HeaderBarOptionsBehaviour implements IHeaderBarOptions {
  public abstract onPressClose: () => void;
  public abstract onPressReady: () => void;
}
