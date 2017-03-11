import React from 'react';
import {render} from 'react-dom';

window.onload = () => {
  render(
    <GuessWhoContainer />,
      document.getElementById('app')
    );
  }
