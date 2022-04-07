import {IComparisonTemplate} from '../../interfaces/comparison.interface';
import {ICountrySelected} from '../../interfaces/countrySelected.interface';
import {CountryCardInformation} from '../../interfaces/countryWheaterInfo.interface';
import {HeaderBehaviour} from '../header/header';

export abstract class ComparisonTemplateBehaviour
  implements IComparisonTemplate
{
  public abstract header: HeaderBehaviour;
  public abstract countriesSelected: ICountrySelected[];
  public abstract countriesComparison: CountryCardInformation[];
  public abstract onRemoveCountrySelected: (name: string) => void;
}
