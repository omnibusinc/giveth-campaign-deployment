import deploymentActions from '../actions/deploymentActions';

export function campaignValues(state = {}, action) {
    switch(action.type) {
        case deploymentActions.UPDATE_CAMPAIGN_VALUES:
            return action.payload.data;
        default: return state;
    }
}

export function deploymentStatus(state = deploymentActions.RUN_UNSTARTED, action) {
    switch(action.type) {
        case deploymentActions.RUN_IN_PROGRESS: 
            return action.payload.data;
        case deploymentActions.RUN_COMPLETE: 
            return action.payload.data;
        case deploymentActions.RUN_ERROR: 
            return action.payload.data;
        default: return state;
    }
}

export function currentDeploymentStep(state = null, action) {
    switch(action.type) {
        case deploymentActions.UPDATE_DEPLOYMENT_STEP:
            return action.payload.data;
        default: return state;
    }
}

export function deploymentResults(state = [], action) {
    switch(action.type) {
        case deploymentActions.SET_DEPLOYMENT_RESULTS:
            return action.payload.data;
        default: return state;
    }
}

export function completedDeployments(state = {}, action) {
    switch(action.type) {
        case deploymentActions.DEPLOYMENT_COMPLETE:
            return Object.assign({}, state, { [action.payload.data]: true });
        default: return state;
    }
}

export function error(state = false, action) {
    switch(action.type) {
        case deploymentActions.RUN_ERROR:
            return action.payload.data;
        default: return false;
    }
}