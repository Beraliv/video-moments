import { responsiveClassName } from ".";
import { SkinSize } from "../../types/SkinSize";

const TEST_SIZE_CLASS_MAP: Record<SkinSize, string> = {
  S: 'small_class',
  M: 'medium_class',
  L: 'large_class',
};

describe('src/functions/responsiveClassName', () => {
  it('returns small class', () => {
    expect(responsiveClassName('S', TEST_SIZE_CLASS_MAP)).toBe('small_class');
  })

  it('returns medium class', () => {
    expect(responsiveClassName('M', TEST_SIZE_CLASS_MAP)).toBe('medium_class');
  })

  it('returns large class', () => {
    expect(responsiveClassName('L', TEST_SIZE_CLASS_MAP)).toBe('large_class');
  })

  it('throws error if size is not recognisable', () => {
    expect(() => responsiveClassName('INVALID_SIZE' as any, TEST_SIZE_CLASS_MAP)).toThrow();
  })
});