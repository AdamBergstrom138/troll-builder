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

function* fetchTrollDetails(action) {
  console.log('in fetchTrollDetails', action.payload);
  try {
      const id = action.payload

      const trollDetails = yield axios({
        method: 'GET',
        url: `/api/troll/${id}`,
      })
      yield put ({
        type: 'SET_TROLLDETAILS',
        payload: trollDetails.data
      }) 
      console.log('trollDetails', trollDetails);
  } catch(error){   // add error? and log it
      console.log('fetch Troll Details error', error);
  }
      
}

function* trollSaga() {
  yield takeLatest('FETCH_TROLLS', fetchTrolls)
  yield takeLatest('FETCH_TROLLDETAILS', fetchTrollDetails)
}

export default trollSaga;

