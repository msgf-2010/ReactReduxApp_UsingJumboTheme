import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../../../../reducers/Counter';
import Button from '@material-ui/core/Button';

const Counter = props => (
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

        <p>Current count: <strong style={{ color: props.color }}>{props.count}</strong></p>

        <div className="row">
            <div className="col-md-1">
                <Button variant="contained" className="jr-btn bg-success text-white" onClick={props.increment}>Increment</Button>
            </div>
            <div className="col-md-1">
                <Button variant="contained" className="jr-btn bg-danger text-white" onClick={props.decrement}>Decrement</Button>
            </div>
        </div>
        <br />
        <br/>
        <div className="row">
            <div className="col-md-1">
                <input type="text" className="form-control" value={props.num} onChange={props.changeNum} />
            </div>
            <div className="col-md-2">
                <Button variant="contained" className="jr-btn bg-primary text-white" onClick={props.changeColor}>Change Counter Color</Button>
            </div>
        </div>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
