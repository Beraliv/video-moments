export function setReversibleStyles<K extends keyof CSSStyleDeclaration>(
  element: Pick<HTMLElement, 'style'>,
  styles: Pick<CSSStyleDeclaration, K>,
): VoidFunction {
  const styleProperties = Object.keys(styles) as K[];

  // save start values
  const startStyles = {} as Pick<CSSStyleDeclaration, K>;
  for (const property of styleProperties) {
    const startValue = element.style[property];
    startStyles[property] = startValue;
  }

  // set new values
  for (const property of styleProperties) {
    element.style[property] = styles[property];
  }

  return () => {
    // set start values
    for (const property of styleProperties) {
      element.style[property] = startStyles[property];
    }
  }
}
