import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { runDeployment } from '../actionCreators/deploymentActionCreators';
import { setAccount } from '../actionCreators/userActionCreators';

class AppContainer extends Component {

  componentDidMount() {
    this.props.setAccount();
  }

  render() {
    const { campaignValues, userAccount } = this.props;
    return(
      <div>
        <h2>Giveth Campaign Deployer</h2>
        <Link to={ '/' }>Home</Link>
        { this.props.children }
        <hr />
          <p>Value of 'userAccount' is: <b>{ userAccount }</b></p>
          <p>Value of 'campaignValues' is: <b>{ JSON.stringify(campaignValues) }</b></p>
      </div>
    );
  }

};

//
const mapStateToProps = ({ campaignValues, userAccount }) => ({ campaignValues, userAccount });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ runDeployment, setAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
