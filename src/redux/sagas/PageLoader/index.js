import {call, apply, takeEvery, take, put, fork} from 'redux-saga/effects'
import { push } from "redux-first-history";
import {LOCATION_CHANGE} from "redux-first-history";

function* loadPageData () {
    const request = yield call(fetch, 'https://swapi.dev/api/vehicles')
    const data = yield apply(request, request.json)
    yield put({type: 'FORM_LOADED', payload: data})
}
export default function* pageLoaderSaga() {

        yield takeEvery(LOCATION_CHANGE, loadPageData)


}