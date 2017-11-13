import {combineReducers} from 'redux';
import {HomeReducer as home} from '../routes/Home/module/home';
const makeRootReducers=()=>{
    return combineReducers({
        home
    })
}

export default makeRootReducers;