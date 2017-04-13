import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DeploymentResults from '../components/DeploymentResults';
import Field from '../components/Field';
import deploymentActions from '../actions/deploymentActions';
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

  runDeployment() {
    this.props.runDeployment(this.props.userAccount, this.props.campaignValues);
  }

  render() {
    const { campaignValues, deploymentStatus, deploymentResults, completedDeployments, error } = this.props;
    return (
      <div>
        {
          error &&
          <Alert bsStyle="danger">
            <h2>Oops! There was an error!</h2>
            <h4>{ error.message }</h4>
            <p>{ error.stacktrace }</p>
          </Alert>
        }
        { deploymentResults.length > 0 && <DeploymentResults results={ deploymentResults } /> }
        {
          deploymentStatus === deploymentActions.RUN_IN_PROGRESS && 
          <ProgressBar>
            { completedDeployments.miniMeTokenFactoryContract == true && <ProgressBar active bsStyle="success" now={16} key={1} /> }
            { completedDeployments.miniMeTokenContract == true && <ProgressBar active bsStyle="success" now={17} key={2} /> }
            { completedDeployments.vaultContract == true && <ProgressBar active bsStyle="success" now={16} key={3} /> }
            { completedDeployments.campaignContract == true && <ProgressBar active bsStyle="success" now={17} key={4} /> }
            { completedDeployments.controllerUpdate == true && <ProgressBar active bsStyle="success" now={16} key={5} /> }
            { completedDeployments.milestoneTrackerContract == true && <ProgressBar active bsStyle="success" now={18} key={6} /> }
          </ProgressBar>
        }
        <Form horizontal>
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
      </div>
    )
  }
}

const mapStateToProps = ({ campaignValues, deploymentStatus, deploymentResults, completedDeployments, error }) => 
  ({ campaignValues, deploymentStatus, deploymentResults, completedDeployments, error });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ runDeployment, updateCampaignValues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);