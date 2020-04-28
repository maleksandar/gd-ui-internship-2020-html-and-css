import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actionTypes } from './constants';
import {fetchTasksSuccess, fetchTasksFailure} from './actions'
import api from '../../utils/api';

export function* fetchTasksAsync() {
  try {
    const response = yield call(api.get, '/db');
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

export function* fetchTasksStart() {
  yield takeLatest(
    actionTypes.FETCH_TASKS_START,
    fetchTasksAsync
  );
}

export function* taskSagas() {
  yield all([call(fetchTasksStart)]);
}