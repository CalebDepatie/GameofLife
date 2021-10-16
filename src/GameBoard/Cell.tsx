import React from 'react';
import './Cell.css';

function Cell(props:{live:boolean, setLive:((val:boolean)=>void)}) {

  return (
    <div id={props.live ? 'live' : 'dead'} className={'cell'}
      onClick={(e:any) => props.setLive(!props.live)}/>
  )
};

export default Cell;
