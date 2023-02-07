import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchTrolls() {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };
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

// function* fetchAllMovies() {
//   // get all movies from the DB
//   try {
//       const movies = yield axios.get('/api/movie');
//       console.log('get all:', movies.data);
//       yield put({ type: 'SET_MOVIES', payload: movies.data });

//   } catch {
//       console.log('get all error');
//   }
      
// }