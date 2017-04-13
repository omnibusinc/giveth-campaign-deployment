import { combineReducers } from 'redux';
import { campaignValues, deploymentResults, deploymentStatus, completedDeployments, error } from './deploymentReducer';
import { userAccount } from './userReducer';

const rootReducer = combineReducers({
  campaignValues,
  deploymentStatus,
  deploymentResults,
  completedDeployments,
  error,
  userAccount
});
export default rootReducer;
