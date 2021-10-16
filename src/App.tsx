import React, { useState } from 'react';

import { RuleSelector } from './RuleSelector';
import { GameBoard } from './GameBoard';

function App() {
  const defaultRules = {size:20, minLife:2, maxLife:3, live:3};
  const [ rules, setRules ] = useState<{[key:string]: any}>(defaultRules);

  return (
    <div className="App">
      <header style={{margin:"1rem"}}>
        Conway's Game of Life
      </header>

        {/* rules bar */}
      <div style={{float:"left", width:"20vw"}}>
        <RuleSelector rules={rules} setRules={setRules} />
      </div>

        {/* game viewer and logic handler */}
      <div style={{float:"right", width:"75vw"}}>
        <GameBoard rules={rules} />
      </div>
    </div>
  );
}

export default App;
