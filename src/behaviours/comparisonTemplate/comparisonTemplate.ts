import {IComparisonTemplate} from '../../interfaces/comparison.interface';
import {HeaderBehaviour} from '../header/header';

export abstract class ComparisonTemplateBehaviour
  implements IComparisonTemplate
{
  public abstract header: HeaderBehaviour;
}
