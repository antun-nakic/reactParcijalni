import {
  OSVJEZI_FILMOVE,
  PROMIJENI_INPUT_LOGINA,
  LOGIRAJ_SE,
  OSVJEZI_ODABRANI_FILM,
} from "./actions";

const initialState = {
  inputLogina: "",
  login: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROMIJENI_INPUT_LOGINA: {
      return { ...state, inputLogina: action.payload };
    }
    case LOGIRAJ_SE: {
      return { ...state, login: state.inputLogina, inputLogina: "" };
    }
    case OSVJEZI_FILMOVE:
      return { ...state, filmovi: action.payload };
    case OSVJEZI_ODABRANI_FILM:
      return { ...state, odabraniFilm: action.payload };
    default:
      return state;
  }
}
