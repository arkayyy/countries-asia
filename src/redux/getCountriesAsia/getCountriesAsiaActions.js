import {FETCH_COUNTRIES_ASIA_REQUEST, FETCH_COUNTRIES_ASIA_SUCCESS, FETCH_COUNTRIES_ASIA_FAILURE} from './getCountriesAsiaTypes'
import axios from 'axios'


const getCountriesAsiaRequest=()=>{
    return{
        type: FETCH_COUNTRIES_ASIA_REQUEST
    }
}

const getCountriesAsiaSuccess=(countries)=>{
    return{
        type: FETCH_COUNTRIES_ASIA_SUCCESS,
        payload: countries
    }
}

const getCountriesAsiaFailure=(errorMessage)=>{
    return {
        type: FETCH_COUNTRIES_ASIA_FAILURE,
        payload: errorMessage
    }
}

export const getCountriesAsia=()=>{
    return (dispatch)=>{
        dispatch(getCountriesAsiaRequest());
        axios.get('https://restcountries.eu/rest/v2/region/asia').then((resp)=>{
            //console.log(resp.data);
            dispatch(getCountriesAsiaSuccess(resp.data))
        }).catch((error)=>{
            dispatch(getCountriesAsiaFailure(error.message))
        })
    }
}