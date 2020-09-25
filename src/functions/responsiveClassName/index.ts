import { SkinSize } from "../../types/SkinSize";

export function responsiveClassName(size: SkinSize, sizeClassMap: Record<SkinSize, string>): string {
  if (size === 'S') {
    return sizeClassMap.S;
  }

  if (size === 'M') {
    return sizeClassMap.M;
  }

  if (size === 'L') {
    return sizeClassMap.L;
  }

  throw new Error(`Unexpected size=[${size}] in responsiveClassNames`);
}