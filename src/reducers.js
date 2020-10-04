import {textFieldChangedAction} from './actions';
import {On_Change_Field} from './constants';
const initialState={
    textFieldValue:'',
}
export const textFieldReducer = (state=initialState, action={})=>{
    switch (action.type){
        case On_Change_Field:{
           return Object.assign({},state,{textFieldValue:action.payload});
        }
        default:{
            return state;
         }
        }
}
