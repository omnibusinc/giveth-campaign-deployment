import { combineReducers } from 'redux';
import { campaignValues, deploymentResults, deploymentStatus, completedDeployments, currentDeploymentStep, error } from './deploymentReducer';
import { userAccount } from './userReducer';

const rootReducer = combineReducers({
  campaignValues,
  deploymentStatus,
  deploymentResults,
  completedDeployments,
  currentDeploymentStep,
  error,
  userAccount
});
export default rootReducer;
