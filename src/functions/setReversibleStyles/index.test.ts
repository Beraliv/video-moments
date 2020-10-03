import { setReversibleStyles } from './';

const OLD_WIDTH = '100px';
const NEW_WIDTH = '200px';

const OLD_HEIGHT = '50px';

const TEST_ELEMENT: HTMLElement = { style: {} } as HTMLElement;
TEST_ELEMENT.style.width = OLD_WIDTH;
TEST_ELEMENT.style.height = OLD_HEIGHT;

describe('setReversibleStyles', () => {
  const sideEffects: VoidFunction[] = [];

  afterEach(() => {
    sideEffects.forEach(sideEffect => sideEffect());
  });

  it('should set new styles', () => {
    const revertStyles = setReversibleStyles(TEST_ELEMENT, {
      width: NEW_WIDTH,
    });

    expect(TEST_ELEMENT.style.width).toBe(NEW_WIDTH);

    sideEffects.push(revertStyles);
  });

  it('should set old styles after callback usage', () => {
    const revertStyles = setReversibleStyles(TEST_ELEMENT, {
      width: NEW_WIDTH,
    });

    revertStyles();

    expect(TEST_ELEMENT.style.width).toBe(OLD_WIDTH);
  });

  it('should change only specified keys', () => {
    const revertStyles = setReversibleStyles(TEST_ELEMENT, {
      width: NEW_WIDTH,
    });

    expect(TEST_ELEMENT.style.height).toBe(OLD_HEIGHT);

    revertStyles();

    expect(TEST_ELEMENT.style.height).toBe(OLD_HEIGHT);
  });
})