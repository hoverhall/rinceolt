import { createStore } from 'redux';
import * as actionCodes from './redux/actionCodes';

const request = async function (code, request_body) {

} 

const reducer = (state, action) => {
    switch (action.code) {
        case actionCodes.INIT_USER:
            break;
        default:
            break;
    }
}

export default createStore(reducer)