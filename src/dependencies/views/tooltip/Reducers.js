import { HIDE_TOOLTIP, SHOW_TOOLTIP, tooltipReducer } from "./tooltipActionReducers";

const initState = {

    tooltip: {
        type: HIDE_TOOLTIP,
        data: [],
        position: [0, 0]
    }
}

export const Reducers = (state = initState, action)=>{

    switch (action.type) {
        case SHOW_TOOLTIP:
        case HIDE_TOOLTIP:

            return Object.assign({}, state, {tooltip: tooltipReducer(state.tooltip, action)});
    
        default:
            return state;
    }
}