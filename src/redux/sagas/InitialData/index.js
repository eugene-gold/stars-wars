import {take, all , delay, takeEvery, takeLatest, takeLeading, put, call, fork, spawn, join, select} from 'redux-saga/effects'

//авторизации имитация
function* auth() {
    console.log('auth begin')
    yield delay(2000)
    console.log('auth ok')
    return true
}
//данные получаем сразу при монтировании компонента
function* loadUsers() {
    const request = yield call(fetch, `https://swapi.dev/api/people`)
    const data = yield call([request, request.json])
    console.log('data', data)
}

//данные для компонента при загрузке
export default function* loadBasicData() {
    yield all([
        fork(auth), fork(loadUsers)
    ])
}
