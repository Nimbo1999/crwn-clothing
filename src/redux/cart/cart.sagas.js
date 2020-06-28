import { all, put, call, takeLatest } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.action';

function* clearCartSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
}