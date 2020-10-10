import { Actions } from "../../constants";

export default (identifier) => { // add node as a child
  return {
    type: Actions.TOGGLE_FAVORITE,
    exec: state => {
      let newState = { ...state };
      newState.contacts.filter(contact => contact.id === identifier).favorites = !newState.contacts.filter(contact => contact.id === identifier).favorites
      return newState;
    }
  }
}
