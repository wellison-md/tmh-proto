import { describe, it, expect } from "vitest";
import { formatCategory } from '../utils/formaters';

describe('Format category function', () => {
  it('Returns `Felinos` when param is `cat`', () => {
    expect(formatCategory('cat')).toBe('Felinos');
  });

  it('Returns `Cachorros` when param is `dog`', () => {
    expect(formatCategory('dog')).toBe('Cachorros');
  });

  it('Returns `Pássaros` when param is `bird`', () => {
    expect(formatCategory('bird')).toBe('Pássaros');
  });

  it('Returns `Silvestres` when param is `wild`', () => {
    expect(formatCategory('wild')).toBe('Silvestres');
  });
});
