import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Label } from 'react-bootstrap';
import deploymentActions from '../actions/deploymentActions';

const Field = ({fieldName, fieldText, deploymentStatus, campaignValues, handleChange}) => (
    <FormGroup controlId={ fieldName }>
        <Col componentClass={ ControlLabel } sm={ 2 }>{ fieldText }</Col>
        <Col sm={ 4 }>
            <FormControl
            disabled={ deploymentStatus === deploymentActions.RUN_IN_PROGRESS }
            type="text"
            value={ campaignValues[fieldName] }
            onChange={ handleChange } />
        </Col>
    </FormGroup>
);

export default Field;