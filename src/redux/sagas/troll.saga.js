import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TROLLS" actions
function* fetchTrolls() {
  try {
    const trolls = yield axios.get('/api/troll');
    console.log('get all:', trolls.data);

    //const response = yield axios.get('/api/troll', config);

    yield put({ type: 'SET_TROLL', payload: trolls.data });
    console.log('troll.saga:', trolls.data);
  } catch (error) {
    console.log('Troll get request failed', error);
  }
}

function* trollSaga() {
  yield takeLatest('FETCH_TROLLS', fetchTrolls);
}

export default trollSaga;

