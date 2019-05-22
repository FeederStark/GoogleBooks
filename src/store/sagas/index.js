import { all, takeLatest } from 'redux-saga/effects';
import { searchBooks } from './books';
import { searchBook } from './bookDetails';
import { Types as BooksTypes } from '../ducks/books';
import { Types as BookDetailsTypes } from '../ducks/bookDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(BooksTypes.SEARCH_BOOKS_REQUEST, searchBooks),
    takeLatest(BookDetailsTypes.SEARCH_BOOK_REQUEST, searchBook),
  ]);
}
