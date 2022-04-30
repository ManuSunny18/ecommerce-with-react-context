import React, { useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/app.context.js';
export default function Search() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <h1>Searching for {state.searchTerm}</h1>
    </div>
  );
}
