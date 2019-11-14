const getAllContactsType = 'GET_ALL_CONTACTS';
const createNewContactType = 'CREATE_NEW_CONTACT';
const removeContactType = 'REMOVE_CONTACT';

export const actionCreators = {
    getAllContacts: () => ({ type: getAllContactsType }),
    createNewContact: () => ({ type: createNewContactType }),
    removeContact: () => ({ type: removeContactType })
};

export default (state = [], action) => {

    if (action.type === createNewContactType) {
        return [
            ...state,
            Object.assign({}, action.contact)
        ];
    }

    if (action.type === removeContactType) {
        return state.filter((data, i) => i !== action.id);
    }

    return state;
};