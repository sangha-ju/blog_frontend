import { handleActions } from "redux-actions";

const SAMPLE_ACTION = "auth/SAMPLE_SAMPLE";

const initialState = {};

const auth = handleActions(
    {
        [SAMPLE_ACTION]: (state, action) => state,
    },
    initialState,
);

export default auth;