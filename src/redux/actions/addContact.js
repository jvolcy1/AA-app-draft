import { Actions } from "../../constants";

export default (id, name, role, organization) => { // add node as a child
  return {
    type: Actions.ADD_CONTACT,
    exec: state => {
      let newState = {...state};
      let {contacts} = newState;
      newState.directory = newState.directory.filter(contact => contact.id !== id)
      contacts.push({ id, name, role, organization, notes: [], directory: false });     
      return newState;
    }
  }
}
