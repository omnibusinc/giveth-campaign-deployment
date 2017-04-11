import deploymentActions from '../actions/deploymentActions';

export function campaignValues(state = {}, action) {
    switch(action.type) {
        case deploymentActions.RUN_COMPLETE: 
            return action.payload.data;
        default: return state;
    }
}