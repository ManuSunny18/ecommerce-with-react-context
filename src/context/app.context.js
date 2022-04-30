import React, { createContext, useReducer, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { SEARCH, CATEGORY } from '../constants/index.js';

const AppContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case SEARCH: {
      return { ...state, type: SEARCH };
    }
    case CATEGORY: {
      return { ...state, type: CATEGORY };
    }
    case 'categoryType': {
      return { ...state, categoryType: action.categoryType };
    }
    case 'searchTrigger': {
      return {
        ...state,
        type: SEARCH,
        categoryType: '',
        searchTerm: action.searchTerm,
      };
    }
    default: {
      return state;
    }
  }
}
function AppProvider({ children }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [state, dispatch] = useReducer(reducer, {
    type: location.pathname.indexOf('/category') === 0 ? CATEGORY : SEARCH,
    searchTerm: query || '',
    categoryType: '',
  });
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
