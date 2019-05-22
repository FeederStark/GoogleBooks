/**
 * Types
 */

export const Types = {
  SEARCH_BOOK_REQUEST: 'bookDetails/SEARCH_REQUEST',
  SEARCH_BOOK_SUCCESS: 'bookDetails/SEARCH_SUCCESS',
};

/**
 * Reducers
 */

const INITIAL_STATE = {};
export default function bookDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_BOOK_SUCCESS:
      return action.payload.book;
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  searchBookRequest: id => ({
    type: Types.SEARCH_BOOK_REQUEST,
    payload: { id },
  }),
  searchBookSuccess: book => ({
    type: Types.SEARCH_BOOK_SUCCESS,
    payload: { book },
  }),
};
