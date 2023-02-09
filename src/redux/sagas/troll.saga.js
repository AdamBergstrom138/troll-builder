import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TROLLS" actions
function* fetchTrolls() {
  try {
    const trolls = yield axios.get('/api/troll');
    console.log('get all:', trolls.data);
    yield put({ type: 'SET_TROLL', payload: trolls.data });
    console.log('troll.saga:', trolls.data);
  } catch (error) {
    console.log('Troll get request failed', error);
  }
}

function* fetchAllTrolls() {
  try {
    const trolls = yield axios.get('/api/troll/all');
    console.log('get all:', trolls.data);
    yield put({ type: 'SET_ALL_TROLL', payload: trolls.data });
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

function* addLike(action) {
  console.log('addLike action.payload:', action.payload)
  const id = action.payload;
  yield axios({
      method: 'PUT',
      url: `/api/troll/${id}`,
      data: id
    })
    yield put({
      type: 'FETCH_TROLLDETAILS',
      payload: id
    })
  } 

  function* addTroll(action) {
    console.log('addTroll action.payload:', action.payload)
    // Send the new plant (action.payload) to our server
    // (POST /api/plant)
    try {
      const newTroll = action.payload // 👈 this variable will evaluate to
                                      // something like:
                                      // { name: 'Thing', kingdom: 'Other Thing', ...}
      // POST the new plant object to the server:
      const response = yield axios({
        method: 'POST',
        url: '/api/troll',
        data: newTroll
      })
      
      // Now that we've successfully added a plant to the plants table,
      // we call the fetchPlants Saga function to bring our plantList reducer
      // back in sync with our plants table:
      yield put({
        type: 'FETCH_TROLLS'
      })
    } catch (error) {
      console.log('addTroll fail:', error)
    }
  }

  function* deleteTroll(action) {
    try {
      yield axios.delete(`/api/troll/${action.payload}`)
      yield put ({ type: 'FETCH_TROLLS'});
  
    }
    catch (error) {
      console.log('Error in deleteTroll:', error)
    }
  }
  

function* trollSaga() {
  yield takeLatest('FETCH_TROLLS', fetchTrolls)
  yield takeLatest('FETCH_ALL_TROLLS', fetchAllTrolls)
  yield takeLatest('FETCH_TROLLDETAILS', fetchTrollDetails)
  yield takeLatest('ADD_TROLL', addTroll)
  yield takeLatest('ADD_LIKE', addLike)
  yield takeLatest('DELETE_TROLL', deleteTroll)
}

export default trollSaga;

