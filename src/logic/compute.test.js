import operate from "./operate";

describe('Validation for operate', () => {
  test('1+2=3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('2-2=', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });

  test('5X2=10', () => {
    expect(operate(5, 2, 'x')).toBe('10');
  });

  test('10÷2=5', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('25 % 5 =0', () => {
    expect(operate(25, 5, '%')).toBe('0');
  });

  test('25 > 0 = Error', () => {
    expect(() => operate(25, 0, '>')).toThrow("Unknown operation '>'");
  });

  test('25 ÷ 0 = Error', () => {
    expect(operate(25, 0, '÷')).toMatch(/Can't divide by 0./);
  });
});
