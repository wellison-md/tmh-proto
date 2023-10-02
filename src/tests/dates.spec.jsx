import { describe, it, expect } from 'vitest';
import { splitDate, isInDateInterval } from '../utils/dates';

describe('Testing `dates` functions', () => {
  it('testing weather date-string is converted correctly to an object', () => {
    const assert = splitDate('2023-09-30');
    expect(assert).toEqual({ day: 30, month: 9, year: 2023 });
  });

  it('should be return true when the target-date is in date interval', () => {
    const assert = isInDateInterval('2023-09-01', '2023-10-30', '2023-09-12');
    expect(assert).toBeTruthy();
  });

  it('should be return false when the target-date is out of date interval', () => {
    const assert = isInDateInterval('2023-09-01', '2023-09-05', '2023-09-12');
    expect(assert).toBeFalsy();
  });

  it('should be return false when params are omitted', () => {
    const assert = isInDateInterval('', '', '');
    expect(assert).toBeFalsy();
  });
});
