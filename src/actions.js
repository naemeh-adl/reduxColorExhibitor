import { On_Change_Field } from './constants';
export const textFieldChangedAction=(text)=>({
    type:On_Change_Field,
    payload:text
});