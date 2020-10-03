import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MomentCard, MomentCardParams } from './';

const DEFAULT_MOMENT_CARD_PARAMS: Omit<MomentCardParams, 'size'> = {
  className: 'storybookMomentCard',
  time: '01:55:38',
  title: 'Bayern 1 - 1 Valencia',
  markColor: '#FF0',
  phase: 'initial',
  onPlay: action('play moment'),
};

storiesOf('components/molecules/MomentCard', module)
  .addDecorator(storyFn => (
    <div style={{ position: 'relative', backgroundColor: '#ccc', width: 300 }}>{storyFn()}</div>
  ))
  .add('small size', () => <MomentCard size='S' {...DEFAULT_MOMENT_CARD_PARAMS} />)
  .add('medium size', () => <MomentCard size='M' {...DEFAULT_MOMENT_CARD_PARAMS} />)
  .add('large size', () => <MomentCard size='L' {...DEFAULT_MOMENT_CARD_PARAMS} />)
  .add('seekable', () => <MomentCard size='S' {...DEFAULT_MOMENT_CARD_PARAMS} phase='seekable' />)
  .add('active', () => <MomentCard size='S' {...DEFAULT_MOMENT_CARD_PARAMS} phase='active' />)