import React, { useContext } from 'react';
import { AppContext } from '../context/app.context.js';
export default function Dummy() {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          dispatch({
            type: 'CATEGORY',
          });
        }}
      >
        category
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'SEARCH',
          });
        }}
      >
        SEARCH
      </button>
    </div>
  );
}
