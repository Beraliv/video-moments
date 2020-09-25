export type SkinSizes = {
  /**
   * Size for for mobile devices
   */
  S: 'small';
  /**
   * Size for tablets
   */
  M: 'medium';
  /**
   * Size for desktops
   */
  L: 'large';
};

export type SkinSize = keyof SkinSizes;