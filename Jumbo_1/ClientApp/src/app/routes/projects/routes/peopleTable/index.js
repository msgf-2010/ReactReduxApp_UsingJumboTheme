import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as peopleTableAction from '../../../../../actions/peopleTableAction';
import Button from '@material-ui/core/Button';

class PeopleTable extends Component {

    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    handleFirstNameChange(e) {
        e.preventDefault();
        let firstName = e.target.value
        this.props.firstNameChange(firstName);
    }

    handleLastNameChange(e) {
        e.preventDefault();
        let lastName = e.target.value
        this.props.lastNameChange(lastName);
    }

    handleAgeChange(e) {
        e.preventDefault();
        let age = e.target.value
        this.props.ageChange(age);
    }

    handleSubmit(e) {
        e.preventDefault();
        let person = {
            firstName: this.props.peopleTest.firstName,
            lastName: this.props.peopleTest.lastName,
            age: this.props.peopleTest.age
        }

        this.setState({
            firstName: '',
            lastName: '',
            age: ''
        });

        this.props.peopleTest.firstName = '';
        this.props.peopleTest.lastName = '';
        this.props.peopleTest.age = '';

        this.props.addPerson(person);
    }

    listView(person, idx) {
        return (
            <tr key={idx}>
                <td>
                    {person.firstName}
                </td>
                <td>
                    {person.lastName}
                </td>
                <td>
                    {person.age}
                </td>
                <td>
                    <Button onClick={(e) => this.deletePerson(e, idx)} className="jr-btn bg-danger text-white">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }

    deletePerson(e, idx) {
        e.preventDefault();
        this.props.deletePerson(idx);
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
                    {/*<div className="col-md-2">
                        <Button variant="contained" className="jr-btn bg-danger text-white" onClick={props.clearTable}>Clear Table</Button>
                    </div>*/}
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.props.peopleTest.firstName} onChange={this.handleFirstNameChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.props.peopleTest.lastName} onChange={this.handleLastNameChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" value={this.props.peopleTest.age} onChange={this.handleAgeChange} />
                    </div>
                </div>
                <hr />

                <div>
                    <table className="table table-bordered table-striped table-hover">
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                            {this.props.peopleTest.people.map((person, idx) => this.listView(person, idx))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        peopleTest: state.peopleTest
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: person => dispatch(peopleTableAction.addPerson(person)),
        firstNameChange: firstName => dispatch(peopleTableAction.firstNameChange(firstName)),
        lastNameChange: lastName => dispatch(peopleTableAction.lastNameChange(lastName)),
        ageChange: age => dispatch(peopleTableAction.ageChange(age)),
        deletePerson: idx => dispatch(peopleTableAction.deletePerson(idx))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleTable);


//import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import * as peopleTableAction from '../../../../../actions/peopleTableAction';
//import Button from '@material-ui/core/Button';

//class PeopleTable extends Component {

//    constructor(props) {
//        super(props);
//        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
//        this.handleLastNameChange = this.handleLastNameChange.bind(this);
//        this.handleAgeChange = this.handleAgeChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);

//        this.state = {
//            firstName: "",
//            lastName: "",
//            age: "",
//            peopleTable: []
//        }
//    }

//    handleFirstNameChange(e) {
//        this.setState({
//            firstName: e.target.value
//        })
//    }

//    handleLastNameChange(e) {
//        this.setState({
//            lastName: e.target.value
//        })
//    }

//    handleAgeChange(e) {
//        this.setState({
//            age: e.target.value
//        })
//    }

//    handleSubmit(e) {
//        e.preventDefault();
//        let person = {
//            firstName: this.state.firstName,
//            lastName: this.state.lastName,
//            age: this.state.age
//        }
//        this.state.peopleTable.push(person)
//        this.setState({
//            firstName: "",
//            lastName: "",
//            age: ""
//        });
//        this.props.addPerson(person);
//    }

//    listView(person, idx) {
//        return (
//            <tr>
//                <td>
//                    {person.firstName}
//                </td>
//                <td>
//                    {person.lastName}
//                </td>
//                <td>
//                    {person.age}
//                </td>
//                <td>
//                    <Button data-id={idx} onClick={(e) => this.deletePerson(e, idx)} className="btn btn-danger">
//                        Delete
//                    </Button>
//                </td>
//            </tr>
//        )
//    }

//    deletePerson(e, idx) {
//        e.preventDefault();
//        this.props.deletePerson(idx);
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
//                    {/*<div className="col-md-2">
//                        <Button variant="contained" className="jr-btn bg-danger text-white" onClick={props.clearTable}>Clear Table</Button>
//                    </div>*/}
//                </div>
//                <br />
//                <div className="row">
//                    <div className="col-md-3">
//                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} />
//                    </div>
//                    <div className="col-md-3">
//                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleLastNameChange} />
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
//                                <th>Last Name</th>
//                                <th>Age</th>
//                                <th>Actions</th>
//                            </tr>
//                            {this.props.peopleTable.map((person, idx) => this.listView(person, idx))}
//                        </tbody>
//                    </table>
//                </div>
//            </div>
//        )
//    }
//}

//const mapStateToProps = (state, ownProps) => {
//    return {
//        peopleTable: state.peopleTable
//    }
//};

//const mapDispatchToProps = (dispatch) => {
//    return {
//        addPerson: person => dispatch(peopleTableAction.addPerson(person)),
//        deletePerson: idx => dispatch(peopleTableAction.deletePerson(idx))
//    }
//};

//export default connect(mapStateToProps, mapDispatchToProps)(PeopleTable);