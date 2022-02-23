import React from "react";

const ListaFilmova = ({ filmovi, ucitajPojedinacniFilm }) => {
  const handleClick = (event) => {
    event.preventDefault();
    ucitajPojedinacniFilm(event.target.getAttribute("kljuc"));
  };
  return (
    <div class='list-group'>
      {filmovi !== undefined ? (
        filmovi.map((element) => {
          return (
            <a
              onClick={handleClick}
              key={element.show.id}
              kljuc={element.show.id}
              type='button'
              className='list-group-item list-group-item-action'
              href={element.show.href}>
              {element.show.name}
            </a>
          );
        })
      ) : (
        <p>Nema rezultata...</p>
      )}
    </div>
  );
};

export default ListaFilmova;
