import React from 'react';
import './Cell.css';

function Cell(props:{live:boolean}) {

  return (
    <div className={'cell ' + props.live ? 'live' : 'dead'} />
  )
};

export default Cell;
