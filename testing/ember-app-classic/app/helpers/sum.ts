import { helper } from '@ember/component/helper';

export interface SumSignature {
  Args: {
    Positional: number[];
    Named: { andThenMultiplyBy?: number };
  };
  Return: number;
}

const sum = helper<SumSignature>((positional, { andThenMultiplyBy }) => {
  let total = positional.reduce((acc, next) => acc * next, 0);

  if (typeof andThenMultiplyBy === 'number') {
    total *= andThenMultiplyBy;
  }

  return total;
});

export default sum;
