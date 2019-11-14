import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../../../../actions/contactAction';
import Button from '@material-ui/core/Button';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            age: ''
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAgeChange(e) {
        this.setState({
            age: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let contact = {
            name: this.state.name,
            age: this.state.age
        }
        this.setState({
            name: '',
            age: ''
        });
        this.props.createContact(contact);
    }

    listView(data, index) {
        return (
            <tr>
                <td key={index}>
                    {data.name}
                </td>
                <td key={index}>
                    {data.age}
                </td>
                <td>
                    <Button onClick={(e) => this.deleteContact(e, index)} className="jr-btn bg-danger text-white">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }

    deleteContact(e, index) {
        e.preventDefault();
        this.props.deleteContact(index);
    }

    render() {

        return (
            <div className="container">
                <h1>People Table</h1>
                <hr />
                <div className="row">
                    <div className="col-md-2">
                        <Button variant="contained" className="jr-btn bg-success text-white" onClick={this.handleSubmit}>Add Person</Button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.state.age} onChange={this.handleAgeChange} />
                    </div>
                </div>
                <hr />
                <div>
                    <table className="table table-bordered table-striped table-hover">
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                            {this.props.contactsTest.map((contact, i) => this.listView(contact, i))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contactsTest: state.contactsTest
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: contact => dispatch(contactAction.createContact(contact)),
        deleteContact: index => dispatch(contactAction.deleteContact(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

//**TAKE 2**
//import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import * as contactAction from '../../../../../actions/contactAction';
//import Button from '@material-ui/core/Button';

//class Contacts extends Component {

//    constructor(props) {
//        super(props);
//        this.handleChange = this.handleChange.bind(this);
//        this.handleAgeChange = this.handleAgeChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);

//        this.state = {
//            name: '',
//            age: ''
//        }
//    }

//    handleChange(e) {
//        this.setState({
//            name: e.target.value
//        })
//    }

//    handleAgeChange(e) {
//        this.setState({
//            age: e.target.value
//        })
//    }

//    handleSubmit(e) {
//        e.preventDefault();
//        let contact = {
//            name: this.state.name,
//            age: this.state.age
//        }
//        this.setState({
//            name: '',
//            age: ''
//        });
//        this.props.createContact(contact);
//    }

//    listView(data, index) {
//        return (
//            <tr>
//                <td key={index}>
//                    {data.name}
//                </td>
//                <td key={index}>
//                    {data.age}
//                </td>
//                <td>
//                    <Button onClick={(e) => this.deleteContact(e, index)} className="jr-btn bg-danger text-white">
//                        Delete
//                    </Button>
//                </td>
//            </tr>
//        )
//    }

//    deleteContact(e, index) {
//        e.preventDefault();
//        this.props.deleteContact(index);
//    }

//    render() {

//        return (
//            <div className="container">
//                <h1>People Table</h1>
//                <hr />
//                <div className="row">
//                    <div className="col-md-2">
//                        <Button variant="contained" className="jr-btn bg-success text-white" onClick={this.handleSubmit}>Add Person</Button>
//                    </div>
//                </div>
//                <br />
//                <div className="row">
//                    <div className="col-md-3">
//                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
//                    </div>
//                    <div className="col-md-3">
//                        <input type="text" className="form-control" value={this.state.age} onChange={this.handleAgeChange} />
//                    </div>
//                </div>
//                <hr />
//                <div>
//                    <table className="table table-bordered table-striped table-hover">
//                        <tbody>
//                            <tr>
//                                <th>First Name</th>
//                                <th>Age</th>
//                                <th>Actions</th>
//                            </tr>
//                            {this.props.contactsTest.map((contact, i) => this.listView(contact, i))}
//                        </tbody>
//                    </table>
//                </div>
//            </div>
//        )
//    }
//}

//const mapStateToProps = (state, ownProps) => {
//    return {
//        contactsTest: state.contactsTest
//    }
//};

//const mapDispatchToProps = (dispatch) => {
//    return {
//        createContact: contact => dispatch(contactAction.createContact(contact)),
//        deleteContact: index => dispatch(contactAction.deleteContact(index))
//    }
//};

//export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

//**TAKE 1**
//import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import * as contactAction from '../../../../../actions/contactAction';

//class Contacts extends Component {

//    constructor(props) {
//        super(props);
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);

//        this.state = {
//            name: ''
//        }
//    }

//    handleChange(e) {
//        this.setState({
//            name: e.target.value
//        })
//    }

//    handleSubmit(e) {
//        e.preventDefault();
//        let contact = {
//            name: this.state.name
//        }
//        this.setState({
//            name: ''
//        });
//        this.props.createContact(contact);
//    }

//    listView(data, index) {
//        return (
//            <div className="row">
//                <div className="col-md-10">
//                    <li key={index} className="list-group-item clearfix">
//                        {data.name}
//                    </li>
//                </div>
//                <div className="col-md-2">
//                    <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
//                        Remove
//                    </button>
//                </div>
//            </div>
//        )
//    }

//    deleteContact(e, index) {
//        e.preventDefault();
//        this.props.deleteContact(index);
//    }

//    render() {

//        return (
//            <div className="container">
//                <h1>Clientside Contacts Application</h1>
//                <hr />
//                <div>
//                    <h3>Add Contact Form</h3>
//                    <form onSubmit={this.handleSubmit}>
//                        <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name} /><br />
//                        <input type="submit" className="btn btn-success" value="ADD" />
//                    </form>
//                    <hr />
//                    {<ul className="list-group">
//                        {this.props.contactsTest.map((contact, i) => this.listView(contact, i))}
//                    </ul>}
//                </div>
//            </div>
//        )
//    }
//}

//const mapStateToProps = (state, ownProps) => {
//    return {
//        contactsTest: state.contactsTest
//    }
//};

//const mapDispatchToProps = (dispatch) => {
//    return {
//        createContact: contact => dispatch(contactAction.createContact(contact)),
//        deleteContact: index => dispatch(contactAction.deleteContact(index))
//    }
//};

//export default connect(mapStateToProps, mapDispatchToProps)(Contacts);