import Helper from '@ember/component/helper';

type Positional = number[];
type Named = { andThenMultiplyBy?: number };

export interface AddSignature {
  Args: {
    Positional: Positional;
    Named: Named;
  };
  Return: number;
}

export default class AddHelper extends Helper<AddSignature> {
  public compute(positional: Positional, named: Named): number {
    let total = positional.reduce((sum, next) => sum + next, 0);

    if (typeof named.andThenMultiplyBy === 'number') {
      total *= named.andThenMultiplyBy;
    }

    return total;
  }
}
