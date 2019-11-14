const deletePersonType = 'DELETE_PERSON';
const clearTableType = 'CLEAR_TABLE';
const firstNameChangeType = 'FIRSTNAME_CHANGE';
const lastNameChangeType = 'LASTNAME_CHANGE';
const ageChangeType = 'AGE_CHANGE';
const addPersonType = 'ADD_PERSON';

const initialState = {
    people: []
};

export const actionCreators = {
    deletePerson: () => ({ type: deletePersonType }),
    clearTable: () => ({ type: clearTableType }),
    //firstNameChange: () => ({ type: firstNameChangeType }),
    //lastNameChange: () => ({ type: lastNameChangeType }),
    //ageChange: () => ({ type: ageChangeType }),
    addPerson: () => ({ type: addPersonType })
};

export default (state = { people: [] }, action) => {

    if (action.type === addPersonType) {
        console.log(state);
        return [
            ...state.people,
            Object.assign({}, action.person)
        ];
    }

    if (action.type === deletePersonType) {

        return state.people.filter((data, i) => i !== action.id);
    }

    return state;
};


//const deletePersonType = 'DELETE_PERSON';
//const clearTableType = 'CLEAR_TABLE';
//const firstNameChangeType = 'FIRSTNAME_CHANGE';
//const lastNameChangeType = 'LASTNAME_CHANGE';
//const ageChangeType = 'AGE_CHANGE';
//const addPersonType = 'ADD_PERSON';

//const initialState = {
//    people: []
//};

//export const actionCreators = {
//    deletePerson: () => ({ type: deletePersonType }),
//    clearTable: () => ({ type: clearTableType }),
//    firstNameChange: () => ({ type: firstNameChangeType }),
//    lastNameChange: () => ({ type: lastNameChangeType }),
//    ageChange: () => ({ type: ageChangeType }),
//    addPerson: () => ({ type: addPersonType })
//};

//export default (state, action) => {
//    state = state || initialState;

//    if (action.type === firstNameChangeType) {
//        return { ...state, firstName: state.firstName };
//    }

//    if (action.type === lastNameChangeType) {
//        return { ...state, lastName: state.lastName };
//    }

//    if (action.type === ageChangeType) {
//        return { ...state, age: state.age };
//    }

//    if (action.type === addPersonType) {

//        const person = {
//            firstName: state.firstName,
//            lastName: state.lastName,
//            age: state.age
//        };

//        state.people.push(person);

//        return { ...state, people: state.people };
//    }

//    if (action.type === deletePersonType) {
//        const id = state.people.map(id => {
//            if (id.selected) {
//                console.log(id)
//            }
//        })
//    }

//    if (action.type === clearTableType) {
//        return { ...state, people: [] };
//    }

//    return state;
//}


    //console.log(id);
    //let ppl = [...state.people];
    //ppl.splice(id, 1);

    //return { ...state, people: ppl };

    //if (action.type === firstNameChangeType) {
    //    return { ...state, firstName: f.target.value };
    //}


    //firstNameChange = f => {
    //    this.setState({ firstName: f.target.value });
    //}

    //lastNameChange = l => {
    //    this.setState({ lastName: l.target.value });
    //}

    //ageChange = a => {
    //    this.setState({ age: a.target.value });
    //}



    //deletePerson = id => {
    //    console.log(id);
    //    let ppl = [...this.state.people];
    //    ppl.splice(id, 1);
    //    this.setState({ people: ppl });
    //}

    //clearTable = () => {
    //    this.setState({ people: [] });
    //}

    //firstNameChange = f => {
    //    this.setState({ firstName: f.target.value });
    //}

    //lastNameChange = l => {
    //    this.setState({ lastName: l.target.value });
    //}

    //ageChange = a => {
    //    this.setState({ age: a.target.value });
    //}

    //addPerson = () => {
    //    const copy = [...this.state.people];
    //    const person = {
    //        firstName: this.state.firstName,
    //        lastName: this.state.lastName,
    //        age: this.state.age
    //    };

    //    if (person.firstName !== "" && person.lastName !== "" && person.age !== "") {

    //        copy.push(person);

    //        this.setState({
    //            firstName: '',
    //            lastName: '',
    //            age: '',
    //            people: copy
    //        });
    //    }
    //}

    //addPerson: () => ({ type: addPersonType })