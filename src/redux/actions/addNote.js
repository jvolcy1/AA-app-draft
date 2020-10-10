import { Actions } from "../../constants";

export default (identifier, note) => { // add node as a child
  return {
    type: Actions.ADD_NOTE,
    exec: state => {
      let newState = { ...state };
      let notes = newState.contacts.filter(c => c.id === identifier)[0].notes
      notes.push({ id: notes.length.toString(), text: note, date: Date().toString() });
      return newState;
    }
  }
}
