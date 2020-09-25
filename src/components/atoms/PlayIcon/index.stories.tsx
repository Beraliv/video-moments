import React from 'react';
import { storiesOf } from '@storybook/react';
import { PlayIcon } from './';

storiesOf('components/atoms/PlayIcon', module)
  .addDecorator(storyFn => (
    <div style={{ position: 'relative', backgroundColor: '#ccc' }}>{storyFn()}</div>
  ))
  .add('small size', () => <PlayIcon size='S' />)
  .add('medium size', () => <PlayIcon size='M' />)
  .add('large size', () => <PlayIcon size='L' />);