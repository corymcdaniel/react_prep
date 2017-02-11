require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const cards = [
  'This is the first card.',
  'This is the second card.',
  'This is the third card.'
];

const boardLists = [
  {
  title: 'List One',
  cards
  },
  {
    title: 'List Two',
    cards
  }
];

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Board lists={boardLists} title="Example Board"/>, document.getElementById('app'))
);