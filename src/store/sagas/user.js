import {takeEvery, call} from "@redux-saga/core/effects";

import {api} from "./api";
import {} from "../constants/user";


function* sessionReq() {
  try {
    const {data} = yield call(api.get, "");

  } catch (error) {
    console.log(error);
  }
}

export function* sessionWatcher() {
  yield takeEvery('', sessionReq);
}
