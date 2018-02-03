import {MARKET_DATA_LOADED} from '../constants';

let initialState = {
    market_data: {},
};

export default function message(state = initialState, action) {

    switch (action.type) {

        case MARKET_DATA_LOADED :
            return Object.assign({}, state, {market_data: action.market_data});

        default :
            return state
    }

}

