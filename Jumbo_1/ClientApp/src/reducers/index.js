import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import Settings from './Settings';
import ChatData from './Chat';
import Contact from './Contact';
import Mail from './Mail';
import ToDo from './ToDo';
import Auth from './Auth';
import Counter from './Counter';
import PeopleTest from './PeopleTable';
import Contacts from './ContactReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    settings: Settings,
    chatData: ChatData,
    contacts: Contact,
    mail: Mail,
    toDo: ToDo,
    auth: Auth,
    counter: Counter,
    peopleTest: PeopleTest,
    contactsTest: Contacts
});
