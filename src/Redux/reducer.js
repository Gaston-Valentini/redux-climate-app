import { ADD, REMOVE } from "./actions";

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    location: action.payload.location,
                    temperature: Math.ceil(action.payload.temperature / 10),
                    humidity: Math.ceil(action.payload.humidity / 10),
                    windSpeed: action.payload.windSpeed,
                    id: action.payload.id
                }
            ]
        case REMOVE:
            var newArr = []
            state.map(city => {
                if (city.id !== action.payload) {
                    newArr.push(city)
                }
                return newArr
            })
            return newArr;
        default: return state;
    }
}