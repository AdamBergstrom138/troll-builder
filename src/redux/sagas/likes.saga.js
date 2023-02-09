// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// function* fetchLikes(action) {
//     console.log('in fetchLikes', action.payload);
//     try {
//         const id = action.payload
//         const likes = yield axios({
//           method: 'GET',
//           url: `/api/likes/${id}`,
//         })
//         yield put ({
//           type: 'SET_LIKES',
//           payload: likes.data
//         }) 
//         console.log('FetchLikes in likes.saga', likes);
//     } catch(error){   // add error and log it
//         console.log('fetch Troll Details error', error);
//     }
        
//   }
  
//   function* likesSaga() {
//     yield takeLatest('FETCH_LIKES', fetchLikes);

//   }
  
//   export default likesSaga;
  