import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Characters from '../components/characters/Characters';
import { setCharactersPromise } from '../actions/characterActions';
import { getCharacters, getCharactersLoading, getCharactersError } from '../selectors/characterSelectors';

export default function AllCharacters() {
  const dispatch = useDispatch();
  const list = useSelector(getCharacters);
  const loading = useSelector(getCharactersLoading);
  const error = useSelector(getCharactersError);

  const characterPromise = () => dispatch(setCharactersPromise());

  useEffect(() => {
    characterPromise();
  }, []);

  if(loading) return <img src="./loading.gif" alt="LOADING..."/>;

  if(!list) return <h1>{error}</h1>;

  return (
    <>
      <div>
        <Characters characters={list} />
      </div>
    </>
  );
}