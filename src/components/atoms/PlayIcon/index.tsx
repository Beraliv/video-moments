import React, { FunctionComponent } from 'react';
import { CardHeightBySkinSize } from '../../../consts/CardHeightBySkinSize';
import { SkinSize } from '../../../types/SkinSize';

export const PlayIcon: FunctionComponent<{ size: SkinSize; }> = ({ size }) => (
  <svg width="16" height={CardHeightBySkinSize[size]} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.6"
      d="M1.51449 0.908696C0.847969 0.508782 0 0.988896 0 1.76619L0 9.23381C0 10.0111 0.847971 10.4912 1.5145 10.0913L7.73751 6.35749C8.38485 5.96909 8.38485 5.03091 7.73751 4.64251L1.51449 0.908696Z"
      fill="white"
    />
  </svg>
)