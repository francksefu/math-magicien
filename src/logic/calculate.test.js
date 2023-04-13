import calculate from "./logic/calculate";

describe('Calculate', () => {

    test('first condition', () => {
      const obj = {
        total: null,
        next: null,
        operation: null
      };
      expect(calculate(obj, '1')).toEqual({ next: '1', total: null });
    });
  
    test('second condition', () => {
      const obj = {
        total: null,
        next: '2',
        operation: null,
      };
      expect(calculate(obj, '1')).toEqual({ next: '21', total: null });
    });
  
    test('third condition', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      expect(calculate(obj, '=')).toEqual({});
    });
  });