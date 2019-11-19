import getQuote from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING';
export const FETCH_QUOTE_DONE = 'FETCH_QUOTE_DONE';

export const setQuotePromise = () => ({
  type: FETCH_QUOTE,
  loadingType: FETCH_QUOTE_LOADING,
  doneType: FETCH_QUOTE_DONE,
  payload: getQuote()
});