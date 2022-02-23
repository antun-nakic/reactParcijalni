import React from "react";
import { Card } from "react-bootstrap";

const Film = ({ odabraniFilm }) => {
  return (
    <Card>
      {odabraniFilm !== undefined ? (
        <div>
          <h2>{odabraniFilm.name}</h2>
          <p>Storyline: {odabraniFilm.summary}</p>
        </div>
      ) : (
        <p>Ovdje će se prikazivati pojedinačno odabrani film</p>
      )}
    </Card>
  );
};

export default Film;
