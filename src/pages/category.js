import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/app.context.js';
export default function Category(props) {
  const { state, dispatch } = useContext(AppContext);
  let params = useParams();
  useEffect(() => {
    dispatch({
      type: 'categoryType',
      categoryType: params.categoryType,
    });
  }, [params]);
  return (
    <div>
      <h1>looking for {state.categoryType}</h1>
    </div>
  );
}
