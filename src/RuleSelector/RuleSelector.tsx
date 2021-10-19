import React, {Dispatch, SetStateAction} from 'react';

function RuleSelector(props:{rules:{[key:string]: any}, setRules:Dispatch<SetStateAction<{[key:string]: any}>>}) {

    return (
      <>
        <div>
          <label htmlFor='size'>Board Size: </label>
          <input type='text' id='size' value={props.rules['size']} style={{width:"1.5rem"}}
            onChange={(e) => props.setRules({...props.rules, size:e.target.value})} />

          &nbsp;x {props.rules['size']} cells.
        </div>

        <div>
          Any live cell with&nbsp;

          <input type='text' value={props.rules['minLife']} style={{width:"1.5rem"}}
            onChange={(e) => props.setRules({...props.rules, minLife:e.target.value})} />

           &nbsp;to&nbsp;

          <input type='text' value={props.rules['maxLife']} style={{width:"1.5rem"}}
            onChange={(e) => props.setRules({...props.rules, maxLife:e.target.value})} />

            &nbsp;live neighbours survive.
        </div>

        <div>
          Any dead cell with&nbsp;

          <input type='text' value={props.rules['live']} style={{width:"1.5rem"}}
            onChange={(e) => props.setRules({...props.rules, live:e.target.value})} />

           &nbsp;live neighbours becomes a live cell.
        </div>
      </>
    )
};

export default RuleSelector;
