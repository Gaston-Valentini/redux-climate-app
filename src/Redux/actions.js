export const ADD = "ADD";
export const REMOVE = "REMOVE";

export function add(payload) {
    return {
        type: ADD,
        payload: payload
    }
}

export function remove(payload) {
    return {
        type: REMOVE,
        payload: payload
    }
}