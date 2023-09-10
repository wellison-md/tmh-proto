import { describe, it, expect } from 'vitest';
import { formatAge } from '../utils/formaters';

const integerAge = '2yo';
const floatAge = '2.5yo';
const decimalAge = '0.3yo';

describe('Testing `formatAge` function', () => {
  it('should return the text `2 anos` when the age is absolute number', () => {
    expect(formatAge(integerAge)).toBe('2 anos');
  });

  it('returns the text `2 anos e 6 meses` when the age is a float number', () => {
    expect(formatAge(floatAge)).toBe('2 ano(s) e 6 mes(es)');
  });

  it('returns a text `idade desconhecida` when param is missing', () => {
    expect(formatAge()).toBe('idade desconhecida');
  });

  it('returns the text `0 anos e 4 meses` when the age is a decimal number', () => {
    expect(formatAge(decimalAge)).toBe('0 ano(s) e 4 mes(es)');
  });
});
