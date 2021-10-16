import React from 'react';
import './Cell.css';

function Cell(props:{live:boolean, setLive:((val:boolean)=>void), readOnly:boolean}) {

  return (
    <div id={props.live ? 'live' : 'dead'} className={'cell' + (props.readOnly ? ' readOnly' : '')}
      {...(props.readOnly ? {} : {onClick:(e:any) => props.setLive(!props.live)})}/>
  )
};

export default Cell;
