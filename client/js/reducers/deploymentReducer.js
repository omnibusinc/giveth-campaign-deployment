import deploymentActions from '../actions/deploymentActions';

export function campaignValues(state = {}, action) {
    switch(action.type) {
        case deploymentActions.UPDATE_CAMPAIGN_VALUES:
            return action.payload.data;
        // case deploymentActions.RUN_COMPLETE: 
        //     return action.payload.data;
        default: return state;
    }
}

export function deploymentResults(state = [], action) {
    switch(action.type) {
        case deploymentActions.RUN_COMPLETE:
            return action.payload.data;
        default: return state;
    }
}