import update from 'react-addons-update';
import constants from "./actionConstants";
import sizeConstants from "./sizesConstant";

/* Const */
const {
    SET_SIZE,
    SET_SIZERESULT
     } = constants;
const {
    man,
    woman
    } = sizeConstants
/* ACTIONS */
export function setSize(result) {
    return (dispatch) => {
        dispatch({
            type: SET_SIZE,
            payload: result
        });
    };
}
export function calculateSize() {
    return (dispatch, store) => {
        const size = store().home.size;
        const cinsiyet=store().home.size.Cinsiyet;
        if(cinsiyet=="Erkek"){
            if((man.xs.maxBel>=size.Bel && man.xs.minBel<=size.Bel)&&(man.xs.maxKalca>=size.Kalca&&man.xs.minKalca<=size.Kalca)&&(man.xs.maxBoy>=size.Boy&&man.xs.minBoy<=size.Boy)&&(man.xs.maxGogus>=size.Gogus&&man.xs.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'xs',
                        cinsiyet:'erkek'
                    }
                })
            }else if((man.s.maxBel>=size.Bel && man.s.minBel<=size.Bel)&&(man.s.maxKalca>=size.Kalca&&man.s.minKalca<=size.Kalca)&&(man.s.maxBoy>=size.Boy&&man.s.minBoy<=size.Boy)&&(man.s.maxGogus>=size.Gogus&&man.s.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'s',
                        cinsiyet:'erkek'
                    }
                })
            }else if((man.m.maxBel>=size.Bel && man.m.minBel<=size.Bel)&&(man.m.maxKalca>=size.Kalca&&man.m.minKalca<=size.Kalca)&&(man.m.maxBoy>=size.Boy&&man.m.minBoy<=size.Boy)&&(man.m.maxGogus>=size.Gogus&&man.m.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'m',
                        cinsiyet:'erkek'
                    }
                })
            }else if((man.l.maxBel>=size.Bel && man.l.minBel<=size.Bel)&&(man.l.maxKalca>=size.Kalca&&man.l.minKalca<=size.Kalca)&&(man.l.maxBoy>=size.Boy&&man.l.minBoy<=size.Boy)&&(man.l.maxGogus>=size.Gogus&&man.l.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'l',
                        cinsiyet:'erkek'
                    }
                })
            }else if((man.xl.maxBel>=size.Bel && man.xl.minBel<=size.Bel)&&(man.xl.maxKalca>=size.Kalca&&man.xl.minKalca<=size.Kalca)&&(man.xl.maxBoy>=size.Boy&&man.xl.minBoy<=size.Boy)&&(man.xl.maxGogus>=size.Gogus&&man.xl.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'xl',
                        cinsiyet:'erkek'
                    }
                })
            }else{
                console.log("geçersiz");
            }
        }else{
            //Kadın
            if((woman.xs.maxBel>=size.Bel && woman.xs.minBel<=size.Bel)&&(woman.xs.maxKalca>=size.Kalca&&woman.xs.minKalca<=size.Kalca)&&(woman.xs.maxBoy>=size.Boy&&woman.xs.minBoy<=size.Boy)&&(woman.xs.maxGogus>=size.Gogus&&woman.xs.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'xs',
                        cinsiyet:'kadın'
                    }
                })
            }else if((woman.s.maxBel>=size.Bel && woman.s.minBel<=size.Bel)&&(woman.s.maxKalca>=size.Kalca&&woman.s.minKalca<=size.Kalca)&&(woman.s.maxBoy>=size.Boy&&woman.s.minBoy<=size.Boy)&&(woman.s.maxGogus>=size.Gogus&&woman.s.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'s',
                        cinsiyet:'kadın'
                    }
                })
            }else if((woman.m.maxBel>=size.Bel && woman.m.minBel<=size.Bel)&&(woman.m.maxKalca>=size.Kalca&&woman.m.minKalca<=size.Kalca)&&(woman.m.maxBoy>=size.Boy&&woman.m.minBoy<=size.Boy)&&(woman.m.maxGogus>=size.Gogus&&woman.m.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'m',
                        cinsiyet:'kadın'
                    }
                })
            }else if((woman.l.maxBel>=size.Bel && woman.l.minBel<=size.Bel)&&(woman.l.maxKalca>=size.Kalca&&woman.l.minKalca<=size.Kalca)&&(woman.l.maxBoy>=size.Boy&&woman.l.minBoy<=size.Boy)&&(woman.l.maxGogus>=size.Gogus&&woman.l.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'l',
                        cinsiyet:'kadın'
                    }
                })
            }else if((woman.xl.maxBel>=size.Bel && woman.xl.minBel<=size.Bel)&&(woman.xl.maxKalca>=size.Kalca&&woman.xl.minKalca<=size.Kalca)&&(woman.xl.maxBoy>=size.Boy&&woman.xl.minBoy<=size.Boy)&&(woman.xl.maxGogus>=size.Gogus&&woman.xl.minGogus<=size.Gogus)){
                dispatch({
                    type:SET_SIZERESULT,
                    payload:{
                        beden:'xl',
                        cinsiyet:'kadın'
                    }
                })
            }else{
                console.log("geçersiz");
            }
        }
    }
}
/*export function setSize(payload) {
    return {
        type: SET_SIZE,
        payload
    };
}*/
/* HANDLERS */

function handleSetSize(state, action) {
    return update(state, {
        size: {
            $set: action.payload
        }
    })
}
function handleSizeResult(state,action){
    return update(state,{
        sizeresult:{
            $set:action.payload
        }
    })
}
const ACTION_HANDLERS = {
    SET_SIZE: handleSetSize,
    SET_SIZERESULT:handleSizeResult
};
const initialState = { size: {} };

export function HomeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}