const SET_USD ='SET_USD';
const SET_EUR ='SET_EUR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    USD: {
        rate: 0,
        cc: 'USD'
    },
    EUR: {
        rate: 0,
        cc: 'EUR'
    },
    UAH: {
        rate: 1,
        cc: 'UAH'
    },
    isFetching: false
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USD:
            return{...state, USD: action.payload}
        case SET_EUR:
            return{...state, EUR: action.payload}
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching}
        default: return {...state};
    }
}

export const setEUR = (arr) =>{
    let elem ={}
    for (const key in arr) {
        if(arr[key].cc === 'EUR') {
            elem.cc = arr[key].cc
            elem.rate = arr[key].rate
        }
    }
    return {type: SET_EUR,
    payload: elem}
}
export const setUSD = (arr) =>{
    let elem ={}
    for (const key in arr) {
        if(arr[key].cc === 'USD') {
            elem.cc = arr[key].cc
            elem.rate = arr[key].rate
        }
    }
    return {type: SET_USD,
    payload: elem}
}
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})