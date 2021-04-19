
export const SHOW_TOOLTIP  = 1;
export const HIDE_TOOLTIP = 0;

export const tooltipReducer = (state, action) => {

    switch (action.type) {

        case SHOW_TOOLTIP:
            return {type: SHOW_TOOLTIP, data: action.data, position: action.position}
        case HIDE_TOOLTIP:
            return {type: HIDE_TOOLTIP, data: [], position: action.position}
        default:
            return state;
    }
}

