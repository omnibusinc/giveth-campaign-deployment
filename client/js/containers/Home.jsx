import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DeploymentResults from '../components/DeploymentResults';
import Field from '../components/Field';
import deploymentActions from '../actions/deploymentActions';
import { setAccount } from '../actionCreators/userActionCreators';
import { runDeployment, updateCampaignValues } from '../actionCreators/deploymentActionCreators';
import { Form, FormGroup, ControlLabel, FormControl, Col, Row, Button, ProgressBar, Glyphicon, Alert, Label } from 'react-bootstrap';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      edited: false
    }
  }

  handleChange(item, caller) {
    this.setState({edited: true});
    let campaignValues = Object.assign({}, this.props.campaignValues);
    campaignValues[item] = caller.currentTarget.value;
    this.props.updateCampaignValues(campaignValues);
  }

  //FIXME: CHECK INPUT
  updateUser(caller) {
    this.props.setAccount(caller.currentTarget.value);
  }

  runDeployment() {
    this.props.runDeployment(this.props.userAccount, this.props.campaignValues);
  }

  getPercentComplete() {
    let complete = 10;
    for(var deployment in this.props.completedDeployments) {
      if(this.props.completedDeployments[deployment] == true) complete += (90/6);
    }
    return complete;
  }

  formatCurrentDeploymentStep(step) {
    if(step) {
      let words = step.replace( /([A-Z])/g, " $1" );
      let stepText =  words.charAt(0).toUpperCase() + words.slice(1);
      return stepText;
    }
    return "";
  }

  render() {
    const { userAccount, campaignValues, deploymentStatus, deploymentResults, completedDeployments, currentDeploymentStep, error } = this.props;
    return (
      <div>
        <Row>
          <Col md={ 8 } mdOffset={ 2 }>
            {
              error &&
              <Alert bsStyle="danger">
                <h2>Oops! There was an error!</h2>
                <h4>{ error.message }</h4>
                <p>{ error.stacktrace }</p>
              </Alert>
            }
            <div className="deployment-progress text-center">
              {
                deploymentStatus === deploymentActions.RUN_IN_PROGRESS &&
                <div>
                  <h4>Deploying: { this.formatCurrentDeploymentStep(currentDeploymentStep) } <img src="../../img/spinner.gif" className="spinner" /></h4>
                  <ProgressBar active now={ this.getPercentComplete() } />
                </div>
              }
              { 
                deploymentStatus === deploymentActions.RUN_COMPLETE &&  
                <div>
                  <span>Deployment Complete!</span>
                  <ProgressBar bsStyle="success" now={ 100 } />
                </div>
              }
            </div>
            { deploymentResults.length > 0 && <DeploymentResults results={ deploymentResults } /> }
          </Col>
        </Row>
        <Row>
          <Col md={ 10 }>
            <Form horizontal className="campaign-form">
              <FormGroup controlId='userAccount'>
                <Col componentClass={ ControlLabel } md={ 4 }>Sender</Col>
                <Col md={ 8 }>
                  <FormControl
                    disabled={ deploymentStatus === deploymentActions.RUN_IN_PROGRESS }
                    type="text"
                    value={ userAccount }
                    onChange={ this.updateUser.bind(this) } />
                </Col>
              </FormGroup>
              <Field 
                fieldName="escapeCaller" 
                fieldText="Escape Caller" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'escapeCaller')}>
                </Field>
              <Field 
                fieldName="escapeDestination" 
                fieldText="Escape Destination" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'escapeDestination')}>
                </Field>
              <Field 
                fieldName="securityGuard" 
                fieldText="Security Guard" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'securityGuard')}>
                </Field>
              <Field 
                fieldName="arbitrator" 
                fieldText="Arbitrator" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'arbitrator')}>
                </Field>
              <Field 
                fieldName="donor" 
                fieldText="Donor" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'donor')}>
                </Field>
              <Field 
                fieldName="recipient" 
                fieldText="Recipient" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'recipient')}>
                </Field>
              <Field 
                fieldName="tokenName" 
                fieldText="Token Name" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'tokenName')}>
                </Field>
              <Field 
                fieldName="tokenSymbol" 
                fieldText="Token Symbol" 
                deploymentStatus={ deploymentStatus }
                campaignValues={ campaignValues }
                handleChange={ this.handleChange.bind(this, 'tokenSymbol')}>
                </Field>
              <Row className="pullRight">
                <Col md={ 4 } mdOffset={ 8 }>
                  <Button bsStyle="success" onClick={ this.runDeployment.bind(this) } disabled={ (!this.state.edited || deploymentStatus === deploymentActions.RUN_IN_PROGRESS) } >Run Deployment</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ userAccount, campaignValues, deploymentStatus, deploymentResults, completedDeployments, currentDeploymentStep, error }) => 
  ({ userAccount, campaignValues, deploymentStatus, deploymentResults, completedDeployments, currentDeploymentStep, error });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ runDeployment, updateCampaignValues, setAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);