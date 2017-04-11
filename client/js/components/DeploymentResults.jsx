import React, { Component } from 'react';

const DeploymentResults = ({results}) => (
  <div>
  <h3>Deployment Results:</h3>
    {
      results.map((result, idx) => {
        return(
          <p key={ result.contract }>
            <span>{ result.contract }</span><br />
            <span> Contract Address: { result.address }</span><br />
            <span> Transaction Hash: { result.transactionHash }</span><br />
          </p>
        )
      })
    }
  </div>
);

export default DeploymentResults;