import { describe, it, expect } from 'vitest';
import { formatGender } from '../utils/formaters';

describe('Testing `formatGender` function', () => {
  it('returns text `fêmea` when the param is `female`', () => {
    expect(formatGender('female')).toBe('fêmea');
  });

  it('returns text `macho` when the param is `male`', () => {
    expect(formatGender('male')).toBe('macho');
  });
});
