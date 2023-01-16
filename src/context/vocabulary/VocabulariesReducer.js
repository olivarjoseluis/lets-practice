import { GET_ESPECIFIC_GROUP, GET_SUMMARY_GROUPS } from "./types";


export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_ESPECIFIC_GROUP:
            return {
                ...state,
                especific_group: payload
            }
        case GET_SUMMARY_GROUPS:
            return {
                ...state,
                summary_groups: payload
            }
    }
}