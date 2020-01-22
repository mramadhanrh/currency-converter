import currencyHelper from '../currencyHelper';

describe('Convert to currency format', () => {
  it('Convert to currency format', () => {
    expect(currencyHelper.convertToCurrency(1234)).toBe('1,234');
  });

  it('Convert to currency format with point', () => {
    expect(currencyHelper.convertToCurrency('1234.56')).toBe('1,234.56');
  });

  it('Could convert string to currency format', () => {
    expect(currencyHelper.convertToCurrency('1234')).toBe('1,234');
  });
});

describe('Convert currency to number', () => {
  it('Could convert currency format to number', () => {
    expect(currencyHelper.convertCurrencyToNumber('1,234.56')).toBe(1234.56);
  });
});
