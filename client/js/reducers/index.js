import { combineReducers } from 'redux';
import { campaignValues, deploymentResults } from './deploymentReducer';
import { userAccount } from './userReducer';

const rootReducer = combineReducers({
  campaignValues,
  deploymentResults,
  userAccount
});
export default rootReducer;
