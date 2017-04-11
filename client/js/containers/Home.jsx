import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DeploymentResults from '../components/DeploymentResults';
import { runDeployment, updateCampaignValues } from '../actionCreators/deploymentActionCreators';
import { Form, FormGroup, ControlLabel, FormControl, Col, Row, Button, Glyphicon } from 'react-bootstrap';

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
    const { campaignValues, deploymentResults } = this.props;
    return (
      <div>
        { deploymentResults.length > 0 && <DeploymentResults results={ deploymentResults } /> }
        <Form horizontal>
          <FormGroup controlId="escapeCaller">
            <Col componentClass={ ControlLabel } sm={ 2 }>Escape Caller</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.escapeCaller }
                onChange={ this.handleChange.bind(this, 'escapeCaller') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="escapeDestination">
            <Col componentClass={ ControlLabel } sm={ 2 }>Escape Destination</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.escapeDestination }
                onChange={ this.handleChange.bind(this, 'escapeDestination') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="securityGuard">
            <Col componentClass={ ControlLabel } sm={ 2 }>Security Guard</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.securityGuard }
                onChange={ this.handleChange.bind(this, 'securityGuard') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="arbitrator">
            <Col componentClass={ ControlLabel } sm={ 2 }>Arbitrator</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.arbitrator }
                onChange={ this.handleChange.bind(this, 'arbitrator') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="donor">
            <Col componentClass={ ControlLabel } sm={ 2 }>Donor</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.donor }
                onChange={ this.handleChange.bind(this, 'donor') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="recipient">
            <Col componentClass={ ControlLabel } sm={ 2 }>Recipient</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.recipient }
                onChange={ this.handleChange.bind(this, 'recipient') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="tokenName">
            <Col componentClass={ ControlLabel } sm={ 2 }>Token Name</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.tokenName }
                onChange={ this.handleChange.bind(this, 'tokenName') } />
            </Col>
          </FormGroup>
          <FormGroup controlId="tokenSymbol">
            <Col componentClass={ ControlLabel } sm={ 2 }>Token Symbol</Col>
            <Col sm={ 4 }>
              <FormControl
                type="text"
                value={ campaignValues.tokenSymbol }
                onChange={ this.handleChange.bind(this, 'tokenSymbol') } />
            </Col>
          </FormGroup>
          <Row className="pullRight">
            <Col md={ 4 } mdOffset={ 8 }>
              <Button bsStyle="success" onClick={ this.runDeployment.bind(this) } disabled={ !this.state.edited } >Run Deployment</Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ campaignValues, deploymentResults }) => ({ campaignValues, deploymentResults });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ runDeployment, updateCampaignValues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);