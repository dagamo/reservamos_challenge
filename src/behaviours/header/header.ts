import {IHeader} from '../../interfaces/header.interface';

export abstract class HeaderBehaviour implements IHeader {
  public abstract title: string;
  public abstract searchPlaceholder: string;
  public abstract onPressSearchButton: () => void;
}
