import { all, call } from 'redux-saga/effects';

import { taskSagas } from './containers/TrelloBoard/sagas';

export default function* rootSaga() {
  yield all([call(taskSagas)]);
}