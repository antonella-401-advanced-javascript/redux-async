import { getAvatars } from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

export const fetchCharacter = () => (dispatch, page) => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING,
    payload: getAvatars(page),
    pendingType: FETCH_CHARACTERS_LOADING,
    fulfilledType: FETCH_CHARACTERS_DONE
  });

  return getAvatars(page)
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