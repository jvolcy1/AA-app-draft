import { Actions } from "../../constants";

export default (contactId, noteId, text) => { // add node as a child
  return {
    type: Actions.EDIT_NOTE,
    exec: state => {
      let newState = { ...state };
      newState.contacts.filter(contact => contact.id === contactId)[0].notes.filter(note => note.id === noteId)[0].text = text;
      return newState;
    }
  }
}
