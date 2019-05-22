import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../servies/api';
import { Creators as BooksCreators } from '../ducks/books';

export function* searchBooks(action) {
  try {
    const { data } = yield call(
      api.get,
      `/v1/volumes?q=${action.payload.name}&startIndex=0&maxResults=40`,
    );
    toast.success('Books successfully found!', {
      position: toast.POSITION.TOP_CENTER,
    });
    const books = data.items.map(book => ({
      id: book.id,
      img: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
    }));

    yield put(BooksCreators.searchBooksSuccess(books));
  } catch (err) {
    toast.error('No books found!', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
