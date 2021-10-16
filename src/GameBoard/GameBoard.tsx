import React, { useState, useEffect } from 'react';
import Cell from './Cell';

function GameBoard(props:{rules:{[key:string]: any}}) {
  const [ gameState, setGameState ] = useState([]);

  useEffect(() => {

  }, [props.rules['size']]);

  return (
    <>
      test
    </>
  )
};

export default GameBoard;
