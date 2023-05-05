import { call, apply, takeEvery, put, select, take, fork } from 'redux-saga/effects'
import {LOAD_USERS, LOAD_USERS_SUCCESS} from "../../reducers/People/actions";
import {LOCATION_CHANGE, push} from "redux-first-history";



//worker

export function* loadPeopleDetails() {

}
export function* loadPeopleList({payload}) {

    const {page, search} = payload
    // yield console.log(LOCATION_CHANGE)
    const request = call(fetch,
        `http https://swapi.dev/api/people?page=${page}&search=${search}`
    )
    const data = yield apply(request, request.json)

    yield put({
        type: LOAD_USERS_SUCCESS,
        payload: data
    })
}

export function* loadUsersOnRouteEnter() {

            const state = yield select(s => s.people)

            const {page, search}  = state

            yield put({
                type: LOAD_USERS,
                payload: {
                    page, search
                }
            })

}

//watcher
export function* peopleSaga() {
    // yield fork(loadUsersOnRouteEnter)
    // yield takeEvery(LOAD_USERS, loadPeopleList)

}