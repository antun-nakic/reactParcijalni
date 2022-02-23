export const OSVJEZI_FILMOVE = "OSVJEZI_FILMOVE";
export const PROMIJENI_INPUT_LOGINA = "PROMIJENI_INPUT_LOGINA";
export const LOGIRAJ_SE = "LOGIRAJ_SE";
export const OSVJEZI_ODABRANI_FILM = "OSVJEZI_ODABRANI_FILM";

export function promijeniInputLogina(objekt) {
  return { type: PROMIJENI_INPUT_LOGINA, payload: objekt.payload };
}

export function logirajSe() {
  return { type: LOGIRAJ_SE };
}

export const osvjeziFilmove = (input) => async (dispatch) => {
  let dohvaceniFilmovi = await fetch(
    `https://api.tvmaze.com/search/shows?q=${input}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  dispatch({ type: OSVJEZI_FILMOVE, payload: dohvaceniFilmovi });
};

export const ucitajPojedinacniFilm = (input) => async (dispatch) => {
  let dohvaceniFilm = await fetch(`https://api.tvmaze.com/shows/${input}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  dispatch({ type: OSVJEZI_ODABRANI_FILM, payload: dohvaceniFilm });
};
