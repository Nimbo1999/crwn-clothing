import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signInSuccess, signInFailure } from './user.actions'

function* snapShotUserSignIn(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
  } catch (e) {
    yield put(signInFailure(e));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield snapShotUserSignIn(user);
  } catch (e) {
    yield put(signInFailure(e));
    alert('Email e ou senha incorreto(s)');
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield snapShotUserSignIn(user);
  } catch (error) {
    yield put(signInFailure(error));
    alert('Email e ou senha incorreto(s)');
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}