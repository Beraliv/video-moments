import React, { FunctionComponent, useEffect, useRef } from 'react';
import { noop } from '../../../functions/noop';
import { setReversibleStyles } from '../../../functions/setReversibleStyles';
import { useScroll } from '../../../hooks/useScroll';
import './index.css';

export type ScrollableLaneParams = {};

export const ScrollableLane: FunctionComponent<ScrollableLaneParams> = ({ children }) => {
  const scrollbarLaneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { unsubscribe } = useScroll({
      container: scrollbarLaneRef.current!.parentElement!,
      onScroll: noop,
      onStuckToBottom: noop,
    });

    return () => {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    return setReversibleStyles(scrollbarLaneRef.current!.parentElement!, {
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
      overflowY: 'scroll',
      direction: 'rtl'
    });
  }, []);

  // TODO: add responsive design
  return <div ref={scrollbarLaneRef} className='scrollableLane'>
    {children}
  </div>;
};