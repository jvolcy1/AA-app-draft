import { Actions } from "../../constants";

export default (contactID, noteID) => { // add node as a child
  return {
    type: Actions.DELETE_NOTE,
    exec: state => {
      let newState = { ...state };
      newState.contacts.filter(c => c.id === contactID)[0].notes = newState.contacts.filter(c => c.id === contactID)[0].notes.filter(n => n.id !== noteID);
      return newState;
    }
  }
}
