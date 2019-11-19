import { FETCH_QUOTE, FETCH_QUOTE_LOADING, FETCH_QUOTE_DONE } from '../actions/simpsonsActions';

const initialState = {
  quote: '',
  character: '',
  image: '',
  loading: true,
  error: 'COULD NOT FETCH QUOTE'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return { ...state, quote: action.payload[0].quote, character: action.payload[0].character, image: action.payload[0].image };
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTE_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}