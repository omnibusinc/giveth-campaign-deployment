import React, { Component } from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { setAccount } from '../actionCreators/userActionCreators';
const w3 = require('Web3');

const provider_endpoint = process.argv[2] ? process.argv[2].substr(2) : 'http://localhost:8545';
let web3;
if (typeof window.web3 !== 'undefined') {
  web3 = new w3(window.web3.currentProvider);
} else {
  web3 = new w3(new w3.providers.HttpProvider(provider_endpoint));
}

class AppContainer extends Component {

  componentDidMount() {
    this.props.setAccount(web3.eth.accounts[0]);
  }

  render() {
    const { campaignValues, userAccount } = this.props;
    return(
      <div className="main container padded-vertical">
        <div className="masthead">
          <div className="logo-giveth"></div>
          <h1 className="text-center">Campaign Deployer</h1>
        </div>
        <Home campaignValues={ campaignValues } userAccount={ userAccount }/>
      </div>
    );
  }

};

const mapStateToProps = ({ campaignValues, userAccount }) => ({ campaignValues, userAccount });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
