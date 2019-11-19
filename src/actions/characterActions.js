import getAvatars from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

export const fetchCharacter = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  return getAvatars()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });

      dispatch({
        type: FETCH_CHARACTERS_DONE
      });
    });
};

export const setCharactersPromise = () => ({
  type: FETCH_CHARACTERS,
  loadingType: FETCH_CHARACTERS_LOADING,
  doneType: FETCH_CHARACTERS_DONE,
  payload: getAvatars()
});