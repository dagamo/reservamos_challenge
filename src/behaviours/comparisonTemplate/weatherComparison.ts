import {HeaderBehaviour} from '../header/header';
import {ComparisonTemplateBehaviour} from './comparisonTemplate';

export class WeatherComparisonBehaviour extends ComparisonTemplateBehaviour {
  public header: HeaderBehaviour;
  constructor(header: HeaderBehaviour) {
    super();
    this.header = header;
  }
}
