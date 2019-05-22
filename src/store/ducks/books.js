/**
 * Types
 */

export const Types = {
  SEARCH_BOOKS_REQUEST: 'books/SEARCH_REQUEST',
  SEARCH_BOOKS_SUCCESS: 'books/SEARCH_SUCCESS',
};

/**
 * Reducers
 */
const INITIAL_STATE = [];
export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_BOOKS_REQUEST:
      return state;
    case Types.SEARCH_BOOKS_SUCCESS:
      return action.payload.book;
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  searchBooksRequest: name => ({
    type: Types.SEARCH_BOOKS_REQUEST,
    payload: { name },
  }),
  searchBooksSuccess: book => ({
    type: Types.SEARCH_BOOKS_SUCCESS,
    payload: { book },
  }),
};
