import React, { useState, useEffect } from 'react';
import Cell from './Cell';

import './GameBoard.css';

function GameLogic(rules:{[key:string]: any}, currentBoard:boolean[]): boolean[] {
  let newBoard = JSON.parse(JSON.stringify(currentBoard));

  const numOfAdjacent = (col:number, row:number):number => {
    let count = 0;

    // niavely count 'by hand'
    count += +!!currentBoard[(col-1) + rules['size']*(row-1)];
    count += +!!currentBoard[(col+0) + rules['size']*(row-1)];
    count += +!!currentBoard[(col+1) + rules['size']*(row-1)];

    count += +!!currentBoard[(col-1) + rules['size']*(row+0)];
    //count += +!!currentBoard[(col+0) + props.rules['size']*(row-0)];
    count += +!!currentBoard[(col+1) + rules['size']*(row+0)];

    count += +!!currentBoard[(col-1) + rules['size']*(row+1)];
    count += +!!currentBoard[(col+0) + rules['size']*(row+1)];
    count += +!!currentBoard[(col+1) + rules['size']*(row+1)];

    return count
  };

  for (let row = 0; row < rules['size']; row++) {
    for (let col = 0; col < rules['size']; col++) {
      const idx = col + rules['size'] * row;
      const curState = currentBoard[idx];
      const adjacent = numOfAdjacent(col, row);

      // calculate rules
      if (curState) {
        if (adjacent >= +rules['minLife'] && adjacent <= +rules['maxLife']) {
          //newBoard[idx] = true;
        } else {
          newBoard[idx] = false
        }

      } else {
        if (adjacent === +rules['live']) {
          newBoard[idx] = true;
        }
      }

    }
  }

  return newBoard;
};

function GameBoard(props:{rules:{[key:string]: any}}) {
  const [ gameState, setGameState ] = useState<boolean[]>([]);
  const [ playing, setPlaying ] = useState(false);

  let timer:any = null;

  useEffect(() => {
    setGameState(Array(props.rules['size'] * props.rules['size']).fill(false));

  }, [props.rules['size']]);

  useEffect(() => {
    if (playing) {
      // ticks every second
      timer = setInterval(() => {
        setGameState(GameLogic(props.rules, gameState));
      }, 1000);

    } else {
      clearInterval(timer);
    }
  }, [playing]);

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
      row.push(<Cell key={"cell-" + i + "-" + j} live={gameState[idx]} setLive={setCellState(idx)} readOnly={playing}/>);
    }
    content.push(<div key={"row-"+i} className="row">{row}</div>);
  }

  return (
    <>
      <div style={{marginBottom:"1rem"}}>
        <button onClick={(e:any) => setPlaying(!playing)}>{playing ? 'Pause' : 'Play' }</button>
        <button onClick={(e:any) => setGameState(Array(props.rules['size'] * props.rules['size']).fill(false))}>Clear Board</button>
      </div>
      {content}
    </>
  )
};

export default GameBoard;
