import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import {CountryCardInformation} from '../../interfaces/countryWheaterInfo.interface';
import {HeaderBehaviour} from '../header/header';
import {ComparisonTemplateBehaviour} from './comparisonTemplate';

export class WeatherComparisonBehaviour extends ComparisonTemplateBehaviour {
  public header: HeaderBehaviour;
  public countriesSelected: ICountrySelected[];
  public countriesComparison: CountryCardInformation[];
  constructor(
    header: HeaderBehaviour,
    countriesSelected: ICountrySelected[],
    countriesComparison: CountryCardInformation[],
  ) {
    super();
    this.header = header;
    this.countriesSelected = countriesSelected;
    this.countriesComparison = countriesComparison;
  }
}
