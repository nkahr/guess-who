import React from 'react';
import {render} from 'react-dom';
import GuessWhoContainer from './containers/GuessWhoContainer'

window.onload = () => {
  render(
    <GuessWhoContainer />,
      document.getElementById('app')
    );
  }
