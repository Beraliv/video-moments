import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MomentCard, MomentCardParams } from '../../molecules/MomentCard';
import './index.stories.css';
import { ScrollableLane } from '.';

const DEFAULT_MOMENT_CARD_PARAMS: MomentCardParams = {
  className: 'testMomentCard',
  time: '01:55:38',
  title: 'Bayern 1 - 1 Valencia',
  markColor: '#FF0',
  phase: 'seekable',
  onPlay: action('play moment'),
  size: 'S',
};

storiesOf('components/layouts/ScrollableLane', module)
  .add('test', () => (
    <div className='testPlayerContainer'>
      <div
        className='testScrollPanel'
        onScroll={action('scroll')}
      >
        {Array(7).fill(0).map((_, index) => (
          <MomentCard key={index} {...DEFAULT_MOMENT_CARD_PARAMS} phase='initial' />
        ))}
        {Array(10).fill(0).map((_, index) => (
          <MomentCard key={index + 7} {...DEFAULT_MOMENT_CARD_PARAMS}  />
        ))}
        <MomentCard key={17} {...DEFAULT_MOMENT_CARD_PARAMS} phase='active' />
      </div>
    </div>
  ))
  .add('simple', () => (
    <div className='simplePlayerContainer'>
      <ScrollableLane>
        {Array(7).fill(0).map((_, index) => (
          <MomentCard key={index} {...DEFAULT_MOMENT_CARD_PARAMS} phase='initial' />
        ))}
        {Array(10).fill(0).map((_, index) => (
          <MomentCard key={index + 7} {...DEFAULT_MOMENT_CARD_PARAMS}  />
        ))}
        <MomentCard key={17} {...DEFAULT_MOMENT_CARD_PARAMS} phase='active' />
      </ScrollableLane>
    </div>
  ));