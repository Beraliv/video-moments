import React, { FunctionComponent, memo, useRef } from 'react';
import classNames from 'classnames';
import { noop } from '../../../functions/noop';
import { responsiveClassName } from '../../../functions/responsiveClassName';
import { SkinSize } from '../../../types/SkinSize';
import { PlayIcon } from '../../atoms/PlayIcon';
import './index.css';

export interface MomentCardParams {
  className: string;
  time: string;
  title: string;
  markColor: string;
  size: SkinSize;
  phase: 'initial' | 'seekable' | 'active';
  onPlay: VoidFunction;
}

export const MomentCard: FunctionComponent<MomentCardParams> = memo((props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const {
    time,
    title,
    phase,
    className,
    markColor,
    size,

    onPlay,
  } = props;


  const handleClick = phase === 'seekable' ? onPlay : noop;

  return (
    <div
      className={classNames('momentCard', responsiveClassName(size, {
        S: 'momentCard_S',
        M: 'momentCard_M',
        L: 'momentCard_L',
      }), className, {
        momentCard_seekable: phase === 'seekable',
        momentCard_active: phase === 'active',
      })}
      ref={cardRef}
      role="button"
      onClick={handleClick}
    >
      <p className='momentCard__title'>{title}</p>
      <p className='momentCard__time_placeholder'>&nbsp;</p>
      {phase === 'initial' && (
        <div
          className='momentCard__mark'
          style={{ backgroundColor: markColor }}
        />
      )}
      <p className='momentCard__time'>{time}</p>
      {phase === 'seekable' && (
        <div className='momentCard__hovered'>
          <PlayIcon size={size}/>
          <p className='momentCard__hovered__text'>
            {`Play current moment`}
          </p>
        </div>
      )}
    </div>
  );
});
