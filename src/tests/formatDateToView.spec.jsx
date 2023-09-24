import { describe, it, expect } from 'vitest';
import { formatDateToView } from '../utils/formaters';

describe('formatDateToView function', () => {
  it('Converts a string date correctly', () => {
    expect(formatDateToView('2023-05-01')).toBe('30/04/2023');
  });
});
