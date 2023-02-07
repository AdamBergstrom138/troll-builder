import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchTrolls() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/troll', config);

    yield put({ type: 'SET_TROLLS', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('Troll get request failed', error);
  }
}

function* secretsSaga() {
  yield takeLatest('FETCH_TROLLS', fetchTrolls);
}

export default secretsSaga;