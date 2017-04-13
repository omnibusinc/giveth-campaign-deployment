import userActions from '../actions/userActions';

export function setAccount(data) {
    return {
        type: userActions.SET_ACCOUNT,
        payload: { data }
    }
}