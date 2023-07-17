import { CHANG_VALUE, SET_FIRST_CC, SET_SECOND_CC, SET_CURRENT_CC } from "./input-action";

const defaultValue = {
    value: '100',
    firstCC: 'EUR',
    secondCC: 'UAH',
    current: '1'
}

export const inputReducer =(state = defaultValue, action )=> {
    switch(action.type){
        case CHANG_VALUE:
            return {...state, value: action.payload};
        case SET_FIRST_CC:
            return {...state, firstCC: action.payload};
        case SET_SECOND_CC:
            return {...state, secondCC: action.payload};
        case SET_CURRENT_CC:
            return {...state, current: action.payload};
        default: return {...state};
    }
}
