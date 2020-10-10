import { Actions } from "../constants";

export default function Reducer(state, action) {
  switch(action.type) {
    case Actions.ADD_CONTACT:
      return action.exec(state);
    case Actions.ADD_NOTE:
      return action.exec(state);
    case Actions.DELETE_NOTE:
      return action.exec(state);
    case Actions.EDIT_NOTE:
      return action.exec(state);
    case Actions.TOGGLE_FAVORITE:
      return action.exec(state);
    case "NULL":
      // TODO
    default:
      return state;
  }
};
