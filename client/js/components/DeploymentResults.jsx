import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

const DeploymentResults = ({results}) => (
  <Alert bsStyle="success">
    <h3>Deployment Results:</h3>
    {
      results.map((result, idx) => {
        return(
          <p key={ result.contract }>
            <span>{ result.contract }</span><br />
            <span> Contract Address: { result.address }</span><br />
            <span> Transaction Hash: { result.transactionHash }</span><br />
            <span> ABI: <code>{ result.ABI }</code></span>
          </p>
        )
      })
    }
  </Alert>
);

export default DeploymentResults;