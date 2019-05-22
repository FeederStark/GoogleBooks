import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../servies/api';
import { Creators as BookDetailsCreators } from '../ducks/bookDetails';

export function* searchBook(action) {
  try {
    const { data } = yield call(api.get, `/v1/volumes/${action.payload.id}`);
    const book = {
      description: data.volumeInfo.description ? data.volumeInfo.description : 'NO INFO',
      price:
        data.saleInfo.saleability === 'FOR_SALE'
          ? `R$ ${data.saleInfo.listPrice.amount}`
          : 'NOT FOR SALE',
      pages: data.volumeInfo.pageCount,
      authors: data.volumeInfo.authors,
      img: data.volumeInfo.imageLinks.thumbnail,
      title: data.volumeInfo.title,
    };
    yield put(BookDetailsCreators.searchBookSuccess(book));
  } catch (err) {
    toast.error('This book does not exists!', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
