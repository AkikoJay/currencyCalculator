export const CHANG_VALUE = 'CHANG_VALUE';
export const SET_FIRST_CC = 'SET_FIRST_CC';
export const SET_SECOND_CC = 'SET_SECOND_CC';
export const SET_CURRENT_CC = 'SET_CURRENT_CC';

export const setFirstSelector = (cc)=>({
    type: SET_FIRST_CC,
    payload: cc
})
export const changeValue = (value)=>({
    type: CHANG_VALUE,
    payload: value
})
export const setSecondSelector = (cc)=>({
    type: SET_SECOND_CC,
    payload: cc
})
export const currentSelector = (num)=>({
    type: SET_CURRENT_CC,
    payload: num
})