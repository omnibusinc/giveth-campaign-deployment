import React, { Component } from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router';
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
          <h3> Using Account: <b>{ userAccount }</b></h3>
          <Home campaignValues={ campaignValues } userAccount={ userAccount }/>
        <hr />
      </div>
    );
  }

};

const mapStateToProps = ({ campaignValues, userAccount }) => ({ campaignValues, userAccount });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
