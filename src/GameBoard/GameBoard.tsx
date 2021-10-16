import React, { useState, useEffect } from 'react';
import Cell from './Cell';

import './GameBoard.css';

function GameBoard(props:{rules:{[key:string]: any}}) {
  const [ gameState, setGameState ] = useState<boolean[]>([]);

  useEffect(() => {
    setGameState(Array(props.rules['size'] * props.rules['size']).fill(false));

  }, [props.rules['size']]);

  // Copy on write partial function
  const setCellState = (idx:number) => {
    return (val:boolean) => {
      let newState  = [...gameState];
      newState[idx] = val;
      setGameState(newState);
    };
  };

  let content: any[] = [];

  for (let i = 0; i < props.rules['size']; i++) {
    let row: Array<any> = []
    for (let j = 0; j < props.rules['size']; j++) {
      const idx:number = j + props.rules['size']*i;
      row.push(<Cell key={"cell-" + i + "-" + j} live={gameState[idx]} setLive={setCellState(idx)}/>);
    }
    content.push(<div key={"row-"+i} className="row">{row}</div>);
  }

  return (
    <>
      <div style={{marginBottom:"1rem"}}>
        <button onClick={(e:any) => setGameState(Array(props.rules['size'] * props.rules['size']).fill(false))}>Clear Board</button>
      </div>
      {content}
    </>
  )
};

export default GameBoard;
