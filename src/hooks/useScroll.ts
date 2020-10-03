export type ScrollHandler = (event: Event) => void;

export type UseScrollParams = {
  /**
   * Container where scrollable panel is rendered
   */
  container: HTMLElement;
  /**
   * Callback which is triggered when the panel is being scrolled
   */
  onScroll: ScrollHandler;
  /**
   * Callback which is triggered when the scrollable panel is stuck to the bottom
   */
  onStuckToBottom: ScrollHandler;
}

export type UseScrollReturnType = {
  /**
   * Removes side-effects after using scrollability
   */
  unsubscribe: VoidFunction;
  /**
   * Scroll the panel to the bottom
   */
  scrollToBottom: VoidFunction;
}

export const useScroll = ({ container, onScroll, onStuckToBottom }: UseScrollParams): UseScrollReturnType => {
  const handleScroll: ScrollHandler = (event) => {
    if (event.target === null) {
      return;
    }

    onScroll(event);

    const { scrollHeight, scrollTop } = event.target as HTMLElement;
    if (scrollTop >= scrollHeight) {
      onStuckToBottom(event);
    }
  }

  container.addEventListener('scroll', handleScroll, {
    passive: true,
  });

  const unsubscribe = () => {
    container.removeEventListener('scroll', handleScroll);
  };

  const scrollToBottom = () => {
    const { scrollHeight } = container;

    container.scrollTo({
      behavior: 'smooth',
      top: scrollHeight,
    });
  };

  return {
    unsubscribe,
    scrollToBottom,
  }
}

