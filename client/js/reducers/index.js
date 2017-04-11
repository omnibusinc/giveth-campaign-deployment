import { combineReducers } from 'redux';
import { campaignValues } from './deploymentReducer';
import { userAccount } from './userReducer';

const rootReducer = combineReducers({
  campaignValues,
  userAccount
});
export default rootReducer;
